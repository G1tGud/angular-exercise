import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Router} from "@angular/router";
import {query} from "@angular/animations";
import {CanComponentDeactivate} from "./can-deactivate-guard.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    this.route.queryParams.subscribe(
      (query) => {
        this.allowEdit = query['allowEdit'] == '1';
      }
    )

    this.server = this.serversService.getServer(parseInt(this.route.snapshot.params["id"]));
    this.route.params.subscribe(
      (params) => {
        this.server = this.serversService.getServer(parseInt(params["id"]));
      }
    )
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit) {
      return true;
    }

    if((this.serverName !== this.server.name || this.serverStatus !== this.serverStatus) && !this.changesSaved) {
      return confirm("Are you sure you want to discard the changes?");
    }

    return true;
  }

}
