import { ItemsService } from 'src/app/shared/services/items.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {

  public itemForm: FormGroup;
  constructor(private builder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private itemsService: ItemsService) { }

  ngOnInit() {
    this.initForm();
    this.loadData();
  }

  loadData() {
    const id = this.route.snapshot.params.id;
    this.itemsService.getItemById(id).subscribe((item) => {
      this.itemForm = this.builder.group({
        id: [item.id],
        name: [item.name],
        description: [item.description]
      });
    });
    }

  get id() { return this.itemForm.get('id'); }
  get name() { return this.itemForm.get('name'); }
  get description() { return this.itemForm.get('description'); }

  initForm() {
    this.itemForm = this.builder.group({
      id: [],
      name: [],
      description: []
    });
  }

  onSubmit() {
    const obj = {
      id: this.id.value,
      name: this.name.value,
      description: this.description.value
    };
    this.itemsService.updateItem(obj, obj.id).subscribe(() => {
      this.router.navigate(['/items']);
    });
  }

}
