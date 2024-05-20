import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() name!: string;
  @Input() type = 'text';

  control!: FormControl;

  ngOnInit() {
    this.control = this.form.get(this.name) as FormControl;
  }

  getError() {
    if (this.control?.invalid && (!this.control.pristine || this.control.touched)) {
      const errorKey = Object.keys({ ...this.control.errors })[0];
      return `${this.name}.${errorKey}`;
    }
    return null;
  }
}
