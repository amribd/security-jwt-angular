import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/shared/services/items.service';

@Component({
  selector: 'app-create-items',
  templateUrl: './create-items.component.html',
  styleUrls: ['./create-items.component.scss']
})
export class CreateItemsComponent implements OnInit {

  public itemForm: FormGroup;
  constructor(private builder: FormBuilder,
              private itemsService: ItemsService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.itemForm = this.builder.group({
      id: [],
      name: [''],
      description: ['']
    });
  }

  get id() { return this.itemForm.get('id'); }
  get name() { return this.itemForm.get('name'); }
  get description() { return this.itemForm.get('description'); }

  onSubmit() {
    const obj = {
      id: this.id.value,
      name: this.name.value,
      description: this.description.value
    };
    this.itemsService.postItem(obj).subscribe();
  }



}
