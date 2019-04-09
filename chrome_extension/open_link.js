'use strict'

var temp = document.querySelector('[data-cid=UF_CRM_1528388648]');
var text = temp.querySelector('.crm-entity-widget-content-block-inner').firstChild.firstChild.innerText;
window.open("crmfile://"+text,"_blank");