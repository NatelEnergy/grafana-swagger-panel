
import {PanelCtrl} from  'app/plugins/sdk';

import _ from 'lodash';
import moment from 'moment';
import angular from 'angular';


class SwaggerPanelCtrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);

    this.onConfigChanged();
  }

  onRefresh() {
    console.log("onRefresh()")

  }

  onInitEditMode() {
    this.addEditorTab('Options', 'public/plugins/natel-swagger-panel/editor.html',1);
    this.editorTabIndex = 1;
    this.refresh();
  }

  onSegsChanged() {
    this.panel.pconfig.settings.marker.symbol = this.segs.symbol.value;
    this.onConfigChanged();

    console.log( this.segs.symbol, this.panel.pconfig );
  }

  onPanelInitalized() {
    console.log("onPanelInitalized()")
  }
}
SwaggerPanelCtrl.templateUrl = 'module.html';

export {
  SwaggerPanelCtrl as PanelCtrl
};


