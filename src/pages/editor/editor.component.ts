import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Pokemon } from 'pokenode-ts';
import { CardComponent } from './../card/card.component';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CardComponent, InputComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent implements OnInit {
  @Input() details!: Pokemon;
  @Input() showAsModal = false;

  showBack() {
    return true;
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]),
    height: new FormControl(null, [crossFieldValidator]),
    weight: new FormControl(null, [crossFieldValidator]),
    base_experience: new FormControl(null, [crossFieldValidator]),
  });

  ngOnInit() { }

  addItem(array: any, item: any) {
    array.push(item);
  }

  removeItem(array: any, item: any) {
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  onSave() {

  }
}


const crossFieldValidator: ValidatorFn = (control: AbstractControl) => {
  if (!control.value) {
    return { required: true };
  } else if (control.value <= 0) {
    return { min: true };
  }
  return null;
};
