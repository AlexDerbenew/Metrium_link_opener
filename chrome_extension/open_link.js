'use strict'


if( document.getElementsByClassName('side-panel-iframe')[0] == undefined ){
    var temp = document.querySelector('[data-cid=UF_CRM_1528388648]');
    var text = temp.querySelector('.crm-entity-widget-content-block-inner').firstChild.firstChild.innerText;
}
else{
    var iframe = document.getElementsByClassName('side-panel-iframe')[0];
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var text = innerDoc.documentElement.querySelector(['[data-cid=UF_CRM_1528388648]']).querySelector('.crm-entity-widget-content-block-inner').firstChild.firstChild.innerText;
}
window.open("crmfile://"+text,"_blank");

