import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
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
              private itemsService: ItemsService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService) { }

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
    this.itemsService.postItem(obj).subscribe((item) => {
      this.router.navigate(['items']);
      this.toastr.success('The item has been added successfully', item.name);
    },
    (err) => {
      this.toastr.error('An error occured', err);
    });
  }



}
