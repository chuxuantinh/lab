import { AnimationGroupPlayer } from "@angular/animations/src/players/animation_group_player";
import { importExpr } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { NgModule } from "@angular/core";
import { ButtonModule, PanelMenu } from "primeng/primeng";
import { AppSetting } from '../../models/app_setting';
@Component ({
    selector: "load-angular",
    //templateUrl: './load-angular.component.html',
    template: require('./load-angular.component.html')
})


@NgModule({
    imports: [PanelMenu, ButtonModule],
    declarations: [TinhComponent],
    bootstrap: [TinhComponent]
})
export class TinhComponent  implements OnInit {
    stringifiedData: any;  
  parsedJson: any;  
  
  // Object Data  
  myData = {  
    name: "Chu Xuân Tình",  
    qualification: "MSC",  
    technology: "ITS"  
  };  
  myData1= {
    "_id": {
        "$oid": "60f44ca55bfe5b01d442acc7"
    },
    "collection_name": "Department",
    "policy_id": "policy 1",
    "description": "....",
    "rule_combining": "permit-overrides",
    "is_attribute_resource_required": false,
    "action": "read",
    "target": {
        "function_name": "BooleanEqual",
        "parameters": [{
            "value": "active",
            "resource_id": "Subject"
        }, {
            "value": "true"
        }]
    },
    "rules": [{
        "_id": "rule 1",
        "effect": "Permit",
        "condition": {
            "function_name": "Or",
            "parameters": [{
                "function_name": "StringEqual",
                "parameters": [{
                    "value": "role",
                    "resource_id": "Subject"
                }, {
                    "value": "tinh"
                }]
            }, {
                "function_name": "StringEqual",
                "parameters": [{
                    "value": "role",
                    "resource_id": "Subject"
                }, {
                    "value": "doctor"
                }]
            }]
        }
    }]
}
  
  ngOnInit() {  
  
    // Object data  
    console.log(this.myData1);  
  
    // Convert to JSON  
    this.stringifiedData = JSON.stringify(this.myData1);  
    console.log("With Stringify :" , this.stringifiedData);  
  
     // Parse from JSON  
    this.parsedJson = JSON.parse(this.stringifiedData);  
    console.log("With Parsed JSON :" , this.parsedJson);  
      
  }  
}  