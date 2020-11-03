import { AuthService } from './auth.service';
import { WebsocketService } from './websocket.service';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';
import { WebSocketOptions } from '../models/websocket.options';

export const progressStompConfig: InjectableRxStompConfig = {
  webSocketFactory: () => {
     return new WebSocket(location.protocol !== 'https:' ? environment.wsHost : environment.wssHost );
     //return new WebSocket(environment.baseHost);
    }
};

@Injectable({
  providedIn: 'root'
})
export class ProgressWebsocketService extends WebsocketService {

  constructor(
              stompService: RxStompService,
              authService: AuthService
  ) { 
    super(
      authService,
      stompService,
      progressStompConfig,
      new WebSocketOptions('/topic/progress')
    );
  }

}
