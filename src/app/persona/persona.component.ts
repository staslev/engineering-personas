import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: string;

  constructor(private route: ActivatedRoute) {
    // workaround, pending https://github.com/angular/angular/pull/20030
    window.top.scrollTo(0, 0)
  }

  ngOnInit() {
    this.route.paramMap
        .subscribe((params: ParamMap) => {
          this.persona = params.get('type');
        });

  }

  toHumanReadable(str: string) {
    // credit: https://stackoverflow.com/questions/4149276/javascript-camelcase-to-regular-form
    return str
        // insert a space before all caps
        .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); })
  }

}
