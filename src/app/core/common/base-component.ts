import { Injector, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export class BaseComponent {
    public _renderer: any;
    public _route: ActivatedRoute;
    constructor(injector: Injector) {
        this._renderer = injector.get(Renderer2);
        this._route = injector.get(ActivatedRoute);
    }
    public loadScripts(...list: string[] ) {
        list.forEach(x=> {
            this.renderExternalScript(x).onload = () => {
            }
        })
    }
    public renderExternalScript(src: string): HTMLScriptElement {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.async = true;
        script.defer = true;
        this._renderer.appendChild(document.body, script);
        return script;
    }
    public formatDate(date:any) {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
      }
      public FormatTime(time:any)
      {
        const d = new Date(time);
        let Hours=''+d.getHours();
        let Minutes=''+d.getMinutes();
        return [Hours,Minutes].join(':');
      }
      public transform(date:any): string {
        let tg =  new Date(date);
        let wk =  tg.getDay();
        let thu = '';
        switch(wk){
          case 0: thu = 'Chủ Nhật';break;
          case 1: thu = '2';break;
          case 2: thu = '3';break;
          case 3: thu = '4';break;
          case 4: thu = '5';break;
          case 5: thu = '6';break;
          case 6: thu = '7';break;
        }
        return thu;
      }
}