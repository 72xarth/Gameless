import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-result-dialog',
  template: `
    <h2>{{data.title}}</h2>
    <p>Winner: {{data.win}}</p>
    <p>Score A: {{data.scoreA}}</p>
    <p>Score B: {{data.scoreB}}</p>
    <p>Score +: {{data.scoreUp}}</p>
    <p>Score -: {{data.scoreDown}}</p>
    <p>CalA: {{data.newScore1}}</p>
    <p>CalB: {{data.newScore2}}</p>
  `,
})
export class ResultDialogComponent  implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
