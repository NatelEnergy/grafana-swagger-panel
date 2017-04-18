
import {PanelCtrl} from  'app/plugins/sdk';

import _ from 'lodash';
import moment from 'moment';
import angular from 'angular';


class SwaggerPanelCtrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
  }

  onRefresh() {
    console.log("onRefresh()")
  }

  onInitEditMode() {
    this.addEditorTab('Options', 'public/plugins/natel-swagger-panel/editor.html',1);
    this.editorTabIndex = 1;
    this.refresh();
  }

  onPanelInitalized() {
    console.log("onPanelInitalized()")
  }
}
SwaggerPanelCtrl.templateUrl = 'module.html';

export {
  SwaggerPanelCtrl as PanelCtrl
};


