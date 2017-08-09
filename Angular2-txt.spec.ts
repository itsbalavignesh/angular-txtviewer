/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Angular2Txt } from './Angular2-txt';

describe('Component: Angular2Txt', () => {
  it('should create an file with name My_Report.txt', () => {
  	let data = [
  		{ 
  			name: "Test 1",
  			age: 13,
  			average: 8.2,
  			approved: true,
  			description: "using 'Content here, content here' "
  		},
  		{ 
  			name: 'Test 2',
  			age: 11,
  			average: 8.2,
  			approved: true,
  			description: "using 'Content here, content here' "
  		},
  		{ 
  			name: 'Test 4',
  			age: 10,
  			average: 8.2,
  			approved: true,
  			description: "using 'Content here, content here' "
  		},
  	];

  	let component = new Angular2Txt(data, 'My Report');
  	expect(component).toBeTruthy();
  });
});