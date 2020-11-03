import { SocketResponse } from './../models/websocket.response';
import { WebSocketOptions } from './../models/websocket.options';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { InjectableRxStompConfig, RxStompService, StompConfig } from '@stomp/ng2-stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private obsStompConnection: Observable<any>;
  private subscribers: Array<any> = [];
  private subscriberIndex = 0;
  private stompConfig: any = {
    heartbeatIncoming: 0,
    heartbeatOutgoing: 20000,
    reconnectDelay: 10000
  };

  constructor(
    private authService: AuthService,
    private stompService: RxStompService,
    private updatedStompConfig: InjectableRxStompConfig,
    private options: WebSocketOptions
  ) { 
    // Update StompJs configuration.
    this.stompConfig = {
      ...this.stompConfig, ...this.updatedStompConfig,
      connectHeaders: {Authorization: authService.returnToken()}
    };
    // Initialise a list of possible subscribers.
    this.createObservableSocket();
    // Activate subscription to broker.
    this.connect();
  }

  /**
   * Return an observable containing a subscribers list to the broker.
   */
  public getObservable = () => {
    return this.obsStompConnection;
  }

  private createObservableSocket = () => {
    this.obsStompConnection = new Observable(observer => {
      const subscriberIndex = this.subscriberIndex++;
      this.addToSubscribers({index: subscriberIndex, observer});
      return () => {
        this.removeFromSubscribers(subscriberIndex);
      };
    });
  }

  private addToSubscribers = subscriber => {
    this.subscribers.push(subscriber);
  }

  private removeFromSubscribers = index => {
    for (let i = 0; i < this.subscribers.length; i++) {
      if (i === index) {
        this.subscribers.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Connect and activate the client to the broker.
   */
  private connect = () => {
    this.stompService.stompClient.configure(this.stompConfig);
    this.stompService.stompClient.onConnect = this.onSocketConnect;
    this.stompService.stompClient.onStompError = this.onSocketError;
    this.stompService.stompClient.activate();
  }

  /**
   * On each connect / reconnect, we subscribe all broker clients.
   */
  private onSocketConnect = frame => {
    this.stompService.stompClient.subscribe(this.options.brokerEndpoint, this.socketListener);
  }

  private onSocketError = errorMsg => {

    const response: SocketResponse = {
      type: 'ERROR',
      message: errorMsg
    };

    this.subscribers.forEach(subscriber => {
      subscriber.observer.error(response);
    });
  }

  private socketListener = frame => {
    this.subscribers.forEach(subscriber => {
      subscriber.observer.next(this.getMessage(frame));
    });
  }

  private getMessage = data => {
    const response: SocketResponse = {
      type: 'SUCCESS',
      message: JSON.parse(data.body)
    };
    return response;
  }
}
