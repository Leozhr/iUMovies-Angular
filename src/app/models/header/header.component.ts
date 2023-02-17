import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  visibility: number = 0;
  valid: boolean = false;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.visibility = window.scrollY;
    });
  }

  modal() {
    this.valid = !this.valid;
  }
}
