import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Data, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(parseInt(this.route.params["id"]))
    // this.route.params.subscribe(
    //   (params) => {
    //     this.server = this.serversService.getServer(parseInt(params.id));
    //   }
    // );

    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    )
  }

  onEdit() {
    this.router.navigate(['./edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
