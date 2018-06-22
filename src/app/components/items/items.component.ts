import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { AddItemComponent } from '../add-item/add-item.component'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private itemS: ItemService) { }

  ngOnInit() {
    this.itemS.getItems().subscribe((data) => {
      // console.log(data)
      this.items = data;
    });
  }

  deleteItem(event, item) {
    this.itemS.deleteItem(item);
  }

}
