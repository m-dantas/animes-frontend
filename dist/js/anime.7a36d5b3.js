(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["anime"],{"0195":function(t,e,s){},"0bfb":function(t,e,s){"use strict";var o=s("cb7c");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1811:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"newAnime"}},[s("div",{staticClass:"container mb-3"},[s("h3",{staticClass:"pt-3"},[t._v("Adicionar novo anime")]),s("hr"),s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("h5",{staticClass:"ml-3"},[t._v("Dados do anime")]),s("div",{staticClass:"dados"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("label",{staticClass:"col-form-label"},[t._v("Nome:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),s("div",{staticClass:"col-lg-12"},[s("label",{staticClass:"col-form-label"},[t._v("Nome Alternativo:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nameAlternative,expression:"form.nameAlternative"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.form.nameAlternative},on:{input:function(e){e.target.composing||t.$set(t.form,"nameAlternative",e.target.value)}}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("label",{staticClass:"col-form-label"},[t._v("Ano de Lançamento:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.year,expression:"form.year"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.form.year},on:{input:function(e){e.target.composing||t.$set(t.form,"year",e.target.value)}}})]),s("div",{staticClass:"col-lg-6"},[s("label",{staticClass:"col-form-label"},[t._v("Quantidade de Episódios:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.numberEpisodes,expression:"form.numberEpisodes"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.form.numberEpisodes},on:{input:function(e){e.target.composing||t.$set(t.form,"numberEpisodes",e.target.value)}}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("label",{staticClass:"col-form-label"},[t._v("Sinopse:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.sinopse,expression:"form.sinopse"}],staticClass:"form-control",staticStyle:{resize:"none"},attrs:{rows:"5"},domProps:{value:t.form.sinopse},on:{input:function(e){e.target.composing||t.$set(t.form,"sinopse",e.target.value)}}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("label",{staticClass:"col-form-label"},[t._v("Thumbnail link:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.thumb,expression:"form.thumb"}],staticClass:"form-control",attrs:{type:"url",required:""},domProps:{value:t.form.thumb},on:{input:function(e){e.target.composing||t.$set(t.form,"thumb",e.target.value)}}})])])]),s("h5",{staticClass:"ml-3 mt-3 mb-2"},[t._v("Tipo do anime")]),s("div",{staticClass:"dados"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},t._l(t.type,function(e,o){return s("div",{key:o,staticClass:"custom-control custom-radio custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],staticClass:"custom-control-input",attrs:{id:"customRadio"+o,type:"radio",name:"customRadio"},domProps:{value:e._id,checked:t._q(t.form.type,e._id)},on:{change:function(s){return t.$set(t.form,"type",e._id)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"customRadio"+o}},[t._v(t._s(e.name))])])}),0)])]),s("h5",{staticClass:"ml-3 mt-3 mb-2"},[t._v("Qualidade")]),s("div",{staticClass:"dados"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},t._l(t.typeRaw,function(e,o){return s("div",{key:o,staticClass:"custom-control custom-radio custom-control-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.typeRaw,expression:"form.typeRaw"}],staticClass:"custom-control-input",attrs:{id:"customRadioQ"+o,type:"radio",name:"customRadioQ"},domProps:{value:e._id,checked:t._q(t.form.typeRaw,e._id)},on:{change:function(s){return t.$set(t.form,"typeRaw",e._id)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"customRadioQ"+o}},[t._v(t._s(e.name))])])}),0)])]),s("h5",{staticClass:"ml-3 mt-3 mb-2"},[t._v("Gêneros")]),s("div",{staticClass:"dados"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("ul",{staticClass:"ks-cboxtags"},t._l(t.genders,function(e,o){return s("li",{key:o},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.genders,expression:"form.genders"}],attrs:{id:"checkbox"+o,type:"checkbox"},domProps:{value:e._id,checked:Array.isArray(t.form.genders)?t._i(t.form.genders,e._id)>-1:t.form.genders},on:{change:function(s){var o=t.form.genders,i=s.target,a=!!i.checked;if(Array.isArray(o)){var n=e._id,r=t._i(o,n);i.checked?r<0&&t.$set(t.form,"genders",o.concat([n])):r>-1&&t.$set(t.form,"genders",o.slice(0,r).concat(o.slice(r+1)))}else t.$set(t.form,"genders",a)}}}),s("label",{attrs:{for:"checkbox"+o}},[t._v(t._s(e.name))])])}),0)])])]),s("h5",{staticClass:"ml-3 mt-3 mb-2"},[t._v("Episódios")]),s("div",{staticClass:"dados"},[s("div",{staticClass:"row justify-content-end mr-3"},[s("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:t.addEpisodeo}},[t._v("Adicionar Episódio")])]),t._l(t.form.episodeos,function(e,o){return s("div",{key:o,staticClass:"episodeos mt-2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("label",{staticClass:"col-form-label"},[t._v("Titulo do Episódio:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.episodeos[o].title,expression:"form.episodeos[index].title"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.form.episodeos[o].title},on:{input:function(e){e.target.composing||t.$set(t.form.episodeos[o],"title",e.target.value)}}})]),s("div",{staticClass:"col-lg-12"},[s("label",{staticClass:"col-form-label"},[t._v("Link 480p:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.episodeos[o].links.link480p,expression:"form.episodeos[index].links.link480p"}],staticClass:"form-control",attrs:{type:"url",required:""},domProps:{value:t.form.episodeos[o].links.link480p},on:{input:function(e){e.target.composing||t.$set(t.form.episodeos[o].links,"link480p",e.target.value)}}})]),s("div",{staticClass:"col-lg-12"},[s("label",{staticClass:"col-form-label"},[t._v("Link 720p:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.episodeos[o].links.link720p,expression:"form.episodeos[index].links.link720p"}],staticClass:"form-control",attrs:{type:"url",required:""},domProps:{value:t.form.episodeos[o].links.link720p},on:{input:function(e){e.target.composing||t.$set(t.form.episodeos[o].links,"link720p",e.target.value)}}})]),s("div",{staticClass:"col-lg-12"},[s("label",{staticClass:"col-form-label"},[t._v("Link 1080p:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.episodeos[o].links.link1080p,expression:"form.episodeos[index].links.link1080p"}],staticClass:"form-control",attrs:{type:"url",required:""},domProps:{value:t.form.episodeos[o].links.link1080p},on:{input:function(e){e.target.composing||t.$set(t.form.episodeos[o].links,"link1080p",e.target.value)}}})]),s("div",{staticClass:"form-group col-lg-12"},[s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.episodeos[0].pageHome,expression:"form.episodeos[0].pageHome"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck1",value:"true"},domProps:{checked:Array.isArray(t.form.episodeos[0].pageHome)?t._i(t.form.episodeos[0].pageHome,"true")>-1:t.form.episodeos[0].pageHome},on:{change:function(e){var s=t.form.episodeos[0].pageHome,o=e.target,i=!!o.checked;if(Array.isArray(s)){var a="true",n=t._i(s,a);o.checked?n<0&&t.$set(t.form.episodeos[0],"pageHome",s.concat([a])):n>-1&&t.$set(t.form.episodeos[0],"pageHome",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.form.episodeos[0],"pageHome",i)}}}),t._m(0,!0)])]),s("div",{staticClass:"col-lg-12 mt-2"},[s("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(e){return t.deleteEpisodeo(o)}}},[t._v("Remover")])])])])})],2),s("div",{staticClass:"row justify-content-end mt-3 mr-2"},[s("button",{staticClass:"btn btn-success"},[t.loading?[s("i",{staticClass:"fa fa-spin fa-spinner"}),t._v("\n              Incluindo...\n          ")]:[t._v("Cadastrar")]],2)])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"custom-control-label",attrs:{for:"customCheck1"}},[s("b",[t._v("Listar episódio na home")])])}],a=s("c3e4"),n={indexType:function(){return a["a"].get("/tipos/")},indexTypeRaw:function(){return a["a"].get("/versao/")},indexGender:function(){return a["a"].get("/generos/")}},r=s("a114"),l={name:"new-anime",data:function(){return{loading:!1,type:[],typeRaw:[],genders:[],form:{thumb:"",name:"",nameAlternative:"",sinopse:"",type:"",year:"",numberEpisodes:"",typeRaw:"",genders:[],episodeos:[]}}},created:function(){this.getType(),this.getTypeRaw(),this.getGenders()},methods:{clearInputs:function(){this.form.thumb="",this.form.name="",this.form.nameAlternative="",this.form.sinopse="",this.form.type="",this.form.year="",this.form.numberEpisodes="",this.form.typeRaw="",this.form.genders=[],this.form.episodeos=[]},submit:function(){var t=this;this.loading=!0,r["a"].createNewAnime(this.form).then(function(e){t.clearInputs(),t.loading=!1,t.$root.$emit("Notification::show",{type:"success",message:"Anime cadastrado com sucesso!"})}).catch(function(e){t.loading=!1,t.$root.$emit("Notification::show",{type:"danger",message:"Erro ao cadastrar, tente novamente!"})})},getType:function(){var t=this;n.indexType().then(function(e){t.type=e.data.type}).catch(function(t){console.log("Type erro",t)})},getTypeRaw:function(){var t=this;n.indexTypeRaw().then(function(e){t.typeRaw=e.data.typeRaw}).catch(function(t){console.log("TypeRaw err",t)})},getGenders:function(){var t=this;n.indexGender().then(function(e){t.genders=e.data.gender}).catch(function(t){console.log("Gender erro",t)})},addEpisodeo:function(){this.form.episodeos.push({title:"",pageHome:!1,links:{link480p:"",link720p:"",link1080p:""}})},deleteEpisodeo:function(t){this.form.episodeos.splice(t,1),0===t&&this.addEpisodeo()}}},c=l,d=(s("9d6b"),s("2877")),m=Object(d["a"])(c,o,i,!1,null,"bc6892e2",null);e["default"]=m.exports},"1a72":function(t,e,s){},"214f":function(t,e,s){"use strict";s("b0c5");var o=s("2aba"),i=s("32e9"),a=s("79e5"),n=s("be13"),r=s("2b4c"),l=s("520a"),c=r("species"),d=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),m=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2===s.length&&"a"===s[0]&&"b"===s[1]}();t.exports=function(t,e,s){var u=r(t),p=!a(function(){var e={};return e[u]=function(){return 7},7!=""[t](e)}),f=p?!a(function(){var e=!1,s=/a/;return s.exec=function(){return e=!0,null},"split"===t&&(s.constructor={},s.constructor[c]=function(){return s}),s[u](""),!e}):void 0;if(!p||!f||"replace"===t&&!d||"split"===t&&!m){var v=/./[u],h=s(n,u,""[t],function(t,e,s,o,i){return e.exec===l?p&&!i?{done:!0,value:v.call(e,s,o)}:{done:!0,value:t.call(s,e,o)}:{done:!1}}),g=h[0],b=h[1];o(String.prototype,t,g),i(RegExp.prototype,u,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"2a3b":function(t,e,s){},"2fdb":function(t,e,s){"use strict";var o=s("5ca1"),i=s("d2c8"),a="includes";o(o.P+o.F*s("5147")(a),"String",{includes:function(t){return!!~i(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"386d":function(t,e,s){"use strict";var o=s("cb7c"),i=s("83a1"),a=s("5f1b");s("214f")("search",1,function(t,e,s,n){return[function(s){var o=t(this),i=void 0==s?void 0:s[e];return void 0!==i?i.call(s,o):new RegExp(s)[e](String(o))},function(t){var e=n(s,t,this);if(e.done)return e.value;var r=o(t),l=String(this),c=r.lastIndex;i(c,0)||(r.lastIndex=0);var d=a(r,l);return i(r.lastIndex,c)||(r.lastIndex=c),null===d?-1:d.index}]})},"3a0d":function(t,e,s){},5147:function(t,e,s){var o=s("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[o]=!1,!"/./"[t](e)}catch(i){}}return!0}},"520a":function(t,e,s){"use strict";var o=s("0bfb"),i=RegExp.prototype.exec,a=String.prototype.replace,n=i,r="lastIndex",l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[r]||0!==e[r]}(),c=void 0!==/()??/.exec("")[1],d=l||c;d&&(n=function(t){var e,s,n,d,m=this;return c&&(s=new RegExp("^"+m.source+"$(?!\\s)",o.call(m))),l&&(e=m[r]),n=i.call(m,t),l&&n&&(m[r]=m.global?n.index+n[0].length:e),c&&n&&n.length>1&&a.call(n[0],s,function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(n[d]=void 0)}),n}),t.exports=n},"5efa":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"anime"},[s("div",{staticClass:"container mb-3"},[s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 col-sm-12"},[s("div",{staticClass:"capa-looping",style:{background:"url('"+this.specific.thumb+"') center / cover no-repeat"}}),s("div",{staticClass:"description mb-3"},[s("span",[s("i",{staticClass:"fas fa-calendar-alt"}),s("label",{staticClass:"ml-2"},[t._v("Exibido em: "+t._s(this.specific.year))])]),s("br"),s("span",[s("i",{staticClass:"fas fa-file-video"}),s("label",{staticClass:"ml-2"},[t._v("Tipo: "+t._s(this.specific.type.name))])]),s("br"),s("span",[s("i",{staticClass:"fas fa-compact-disc"}),s("label",{staticClass:"ml-2"},[t._v("Qualidade: "+t._s(this.specific.typeRaw.name))])]),s("br"),s("span",[s("i",{staticClass:"fas fa-film"}),s("label",{staticClass:"ml-2"},[t._v("Quantidade: "+t._s(this.specific.numberEpisodes))])])])]),s("div",{staticClass:"col-lg-9"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row nome"},[s("div",{staticClass:"col-lg-12"},[s("h3",[t._v(t._s(this.specific.name))]),s("hr")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"genero"},[s("h5",[t._v("\n                  Gêneros:\n                  "),t._l(this.specific.genders,function(e,o){return s("label",{key:o,staticClass:"mr-1 backlabel"},[t._v(t._s(e.name))])})],2)])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("h5",[t._v("Sinopse:")]),s("div",{staticClass:"sinopse"},[s("p",[t._v(t._s(this.specific.sinopse))])])])]),s("div",{staticClass:"row mt-2 float-right"},[s("div",{staticClass:"col-lg-12",attrs:{id:"off"}},[t.token?s("button",{staticClass:"btn btn-sm btn-outline-primary",on:{click:function(e){t.showModal=!0}}},[t._v("Adicionar Episódio")]):t._e()])]),t._m(0),s("div",{staticClass:"row"},t._l(this.specific.episodeos,function(e,o){return s("div",{key:o,staticClass:"col-lg-4 mt-1 col-sm-2"},[s("div",{staticClass:"episodeos"},[s("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._l(e.links,function(o,i){return s("div",{key:i,staticClass:"link"},[t.token?s("div",{staticClass:"manager-view"},[s("layout-modal",{staticClass:"layout-modal",attrs:{episodeoId:e._id,titleA:e.title,link480p:o.link480p,link720p:o.link720p,link1080p:o.link1080p}})],1):s("div",{staticClass:"user-view"},[s("layout-player",{attrs:{titleA:e.title,link480p:o.link480p,link720p:o.link720p,link1080p:o.link1080p}})],1)])})],2)])}),0)])])]),s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-sm-12 col-lg-12 col-md-12"},[s("div",{staticClass:"comments p-2"},[s("vue-disqus",{attrs:{shortname:"animesfree-1",title:this.specific.name}})],1)])])]),t.token?s("form",{on:{submit:function(e){return e.preventDefault(),t.adicionar(e)}}},[s("div",{staticClass:"modal fade",class:{show:t.showModal},staticStyle:{display:"block"},style:{display:t.showModal?"block":"none"},attrs:{id:"modalL"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{slot:"title",id:"exampleModalLiveLabel"},slot:"title"},[t._v("Adicionar episódio")]),s("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closeModal()}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"form-group col-sm-6"},[s("label",{staticClass:"col-form-label"},[t._v("Titulo:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.episodeos[0].title,expression:"form.episodeos[0].title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Episódio X",required:""},domProps:{value:t.form.episodeos[0].title},on:{input:function(e){e.target.composing||t.$set(t.form.episodeos[0],"title",e.target.value)}}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"form-group col-sm-12"},[s("label",{staticClass:"col-form-label"},[t._v("Link 480p:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.episodeos[0].links.link480p,expression:"form.episodeos[0].links.link480p"}],staticClass:"form-control",attrs:{type:"url",required:""},domProps:{value:t.form.episodeos[0].links.link480p},on:{input:function(e){e.target.composing||t.$set(t.form.episodeos[0].links,"link480p",e.target.value)}}})]),s("div",{staticClass:"form-group col-sm-12"},[s("label",{staticClass:"col-form-label"},[t._v("Link 720p:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.episodeos[0].links.link720p,expression:"form.episodeos[0].links.link720p"}],staticClass:"form-control",attrs:{type:"url",required:""},domProps:{value:t.form.episodeos[0].links.link720p},on:{input:function(e){e.target.composing||t.$set(t.form.episodeos[0].links,"link720p",e.target.value)}}})]),s("div",{staticClass:"form-group col-sm-12"},[s("label",{staticClass:"col-form-label"},[t._v("Link 1080p:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.episodeos[0].links.link1080p,expression:"form.episodeos[0].links.link1080p"}],staticClass:"form-control",attrs:{type:"url",required:""},domProps:{value:t.form.episodeos[0].links.link1080p},on:{input:function(e){e.target.composing||t.$set(t.form.episodeos[0].links,"link1080p",e.target.value)}}})]),s("div",{staticClass:"form-group col-sm-12"},[s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.episodeos[0].pageHome,expression:"form.episodeos[0].pageHome"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck1",value:"true"},domProps:{checked:Array.isArray(t.form.episodeos[0].pageHome)?t._i(t.form.episodeos[0].pageHome,"true")>-1:t.form.episodeos[0].pageHome},on:{change:function(e){var s=t.form.episodeos[0].pageHome,o=e.target,i=!!o.checked;if(Array.isArray(s)){var a="true",n=t._i(s,a);o.checked?n<0&&t.$set(t.form.episodeos[0],"pageHome",s.concat([a])):n>-1&&t.$set(t.form.episodeos[0],"pageHome",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.form.episodeos[0],"pageHome",i)}}}),t._m(1)])])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.closeModal()}}},[t._v("Fechar")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t.loading?[s("i",{staticClass:"fa fa-spin fa-spinner"}),t._v("\n                Incluindo...\n              ")]:[t._v("Adicionar")]],2)])])])])]):t._e(),s("div",{staticClass:"modal-backdrop fade",class:{show:t.showModal},style:{display:t.showModal?"block":"none"}})])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-lg-12"},[s("h5",[t._v("Links")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"custom-control-label",attrs:{for:"customCheck1"}},[s("b",[t._v("Listar episódio na home")])])}],a=(s("7f7f"),s("96cf"),s("3b8d")),n=s("a114"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{slot:"type",id:"modal-att"},slot:"type"},[s("label",{staticClass:"title-type",on:{click:function(e){t.showModal=!0}}},[t._v("Atualizar links")]),s("form",[s("div",{staticClass:"modal fade",class:{show:t.showModal},staticStyle:{display:"block"},style:{display:t.showModal?"block":"none"},attrs:{id:"modalL"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{slot:"title",id:"exampleModalLiveLabel"},slot:"title"},[t._v("\n              Atualizar links do "+t._s(this.titleA)+"\n            ")]),s("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closeModal()}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"form-group col-sm-12"},[s("label",{staticClass:"col-form-label"},[t._v("Link 480p:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.episodeos[0].links.link480p,expression:"form.episodeos[0].links.link480p"}],staticClass:"form-control",attrs:{type:"url",required:""},domProps:{value:t.form.episodeos[0].links.link480p},on:{input:function(e){e.target.composing||t.$set(t.form.episodeos[0].links,"link480p",e.target.value)}}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"form-group col-sm-12"},[s("label",{staticClass:"col-form-label"},[t._v("Link 720p:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.episodeos[0].links.link720p,expression:"form.episodeos[0].links.link720p"}],staticClass:"form-control",attrs:{type:"url",required:""},domProps:{value:t.form.episodeos[0].links.link720p},on:{input:function(e){e.target.composing||t.$set(t.form.episodeos[0].links,"link720p",e.target.value)}}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"form-group col-sm-12"},[s("label",{staticClass:"col-form-label"},[t._v("Link 1080p:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.episodeos[0].links.link1080p,expression:"form.episodeos[0].links.link1080p"}],staticClass:"form-control",attrs:{type:"url",required:""},domProps:{value:t.form.episodeos[0].links.link1080p},on:{input:function(e){e.target.composing||t.$set(t.form.episodeos[0].links,"link1080p",e.target.value)}}})])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.closeModal()}}},[t._v("Fechar")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.atualizar()}}},[t.loading?[s("i",{staticClass:"fa fa-spin fa-spinner"}),t._v("\n                Incluindo...\n              ")]:[t._v("Atualizar")]],2)])])])])]),s("div",{staticClass:"modal-backdrop fade",class:{show:t.showModal},style:{display:t.showModal?"block":"none"}})])},l=[],c={name:"layoutmodal",props:{episodeoId:{type:String,required:!0},titleA:{type:String,required:!0},link480p:{type:String,required:!0},link720p:{type:String,required:!0},link1080p:{type:String,required:!0}},data:function(){return{loading:!1,showModal:!1,form:{episodeos:[{title:this.titleA,links:{link480p:this.link480p,link720p:this.link720p,link1080p:this.link1080p}}]}}},methods:{closeModal:function(){this.showModal=!1},atualizar:function(){var t=this;this.loading=!0,n["a"].put(this.form,this.episodeoId).then(function(e){t.showModal=!1,t.$root.$emit("Notification::show",{type:"success",message:"Links atualizados com sucesso!"}),t.loading=!1}).catch(function(t){console.log(t)})}}},d=c,m=(s("bdcf"),s("2877")),u=Object(m["a"])(d,r,l,!1,null,"589b38c6",null),p=u.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{slot:"type",id:"modal-att"},slot:"type"},[s("label",{staticClass:"title-type",on:{click:function(e){t.showModal=!0}}},[t._v("Assistir Online")]),s("div",{staticClass:"modal fade",class:{show:t.showModal},staticStyle:{display:"block"},style:{display:t.showModal?"block":"none"},attrs:{id:"modalL"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{slot:"title",id:"exampleModalLiveLabel"},slot:"title"},[t._v("Assistir Online: "+t._s(this.titleA))]),s("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closeModal()}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12",attrs:{id:"video-720p"}},[s("vue-plyr",{ref:"plyr"},[s("video",{attrs:{id:"player",poster:"https://i.ibb.co/JqyyWnk/banner-player.png"}},[s("source",{attrs:{src:this.link480p,type:"video/mp4",size:"480"}}),s("source",{attrs:{src:this.link720p,type:"video/mp4",size:"720"}}),s("source",{attrs:{src:this.link1080p,type:"video/mp4",size:"1080"}})])])],1)])])])])]),s("div",{staticClass:"modal-backdrop fade",class:{show:t.showModal},style:{display:t.showModal?"block":"none"}})])},v=[],h={name:"layoutplayer",props:{titleA:{type:String,required:!0},link480p:{type:String,required:!0},link720p:{type:String,required:!0},link1080p:{type:String,required:!0}},computed:{player:function(){return this.$refs.plyr.player}},data:function(){return{loading:!1,showModal:!1}},methods:{closeModal:function(){this.player.pause(),this.showModal=!1}}},g=h,b=(s("9f2c"),Object(m["a"])(g,f,v,!1,null,"6ba80540",null)),k=b.exports,C={name:"showanime",components:{LayoutModal:p,LayoutPlayer:k},data:function(){return{loading:!1,showModal:!1,specific:[],slug:this.$attrs.slug,token:sessionStorage.getItem("userToken"),form:{episodeos:[{title:"Episódio ",pageHome:!1,links:{link480p:"",link720p:"",link1080p:""}}]}}},created:function(){this.show()},methods:{closeModal:function(){this.showModal=!1},show:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].show(this.slug).then(function(t){e.specific=t.data.anime[0],document.title=t.data.anime[0].name}).catch(function(t){"Anime not register"===t.response.data.error&&e.$router.push({name:"erro"})});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),clearInputs:function(){this.form.episodeos[0].title="Episódio ",this.form.episodeos[0].links.link480p="",this.form.episodeos[0].links.link720p="",this.form.episodeos[0].links.link1080p=""},adicionar:function(){var t=this;this.loading=!0,n["a"].add(this.form,this.specific._id).then(function(e){t.showModal=!1,t.clearInputs(),t.show(),t.loading=!1}).catch(function(e){t.$root.$emit("Notification::show",{type:"danger",message:"Ocorreu algum erro, tente mais tarde!"}),t.loading=!1})}}},y=C,w=(s("d7db"),Object(m["a"])(y,o,i,!1,null,"97d695f4",null));e["default"]=w.exports},"5f1b":function(t,e,s){"use strict";var o=s("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var a=s.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},6762:function(t,e,s){"use strict";var o=s("5ca1"),i=s("c366")(!0);o(o.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},7467:function(t,e,s){"use strict";var o=s("3a0d"),i=s.n(o);i.a},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8fda":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"anime"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"pt-3"},[t._v("Animes")]),t.token?[s("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:t.openPageAddAnime}},[t._v("\n          Adicionar anime\n        ")])]:t._e(),s("hr"),s("div",{staticClass:"row justify-content-end"},[s("div",{staticClass:"col-sm-4 col-lg-4 col-md-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"Buscar anime"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),t.filtrarAnimes.length>0?s("div",{staticClass:"row"},t._l(t.filtrarAnimes,function(e,o){return s("div",{key:o,staticClass:"col-lg-2 col-md-4 py-3"},[s("div",{staticClass:"anime-looping"},[s("div",{staticClass:"capa-looping",style:{background:"url('"+e.thumb+"') center / cover no-repeat"},on:{click:function(s){return t.openShowAnime(e.slug)}}}),e.episodeos.length>0?s("div",{staticClass:"nome-looping"},[t._v(t._s(e.name))]):s("div",{staticClass:"nome-looping",staticStyle:{color:"#ec3c3c"}},[t._v(t._s(e.name))])])])}),0):s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("h1",[t._v("Não encontrado: "+t._s(this.search))])])])],2)])},i=[],a=(s("96cf"),s("3b8d")),n=(s("386d"),s("7f7f"),s("6762"),s("2fdb"),s("a114")),r=(s("5118"),{name:"animes",data:function(){return{search:"",token:sessionStorage.getItem("userToken"),catalago:[]}},computed:{filtrarAnimes:function(){var t=this;return this.catalago.filter(function(e){return e.name.toLowerCase().includes(t.search.toLowerCase())})}},created:function(){this.listar(),document.title="Animes"},methods:{listar:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].index().then(function(t){e.catalago=t.data.anime}).catch(function(t){e.$root.$emit("Notification::show",{type:"danger",message:"Ocorreu algum erro, tente mais tarde!"})});case 2:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),openShowAnime:function(t){this.$router.push({name:"showanime",params:{slug:t}})},openPageAddAnime:function(){this.$router.push({name:"add-anime"})}}}),l=r,c=(s("7467"),s("2877")),d=Object(c["a"])(l,o,i,!1,null,"2f337dc2",null);e["default"]=d.exports},"99bb":function(t,e,s){},"9d6b":function(t,e,s){"use strict";var o=s("99bb"),i=s.n(o);i.a},"9f2c":function(t,e,s){"use strict";var o=s("2a3b"),i=s.n(o);i.a},aae3:function(t,e,s){var o=s("d3f4"),i=s("2d95"),a=s("2b4c")("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,s){"use strict";var o=s("520a");s("5ca1")({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},bdcf:function(t,e,s){"use strict";var o=s("0195"),i=s.n(o);i.a},d2c8:function(t,e,s){var o=s("aae3"),i=s("be13");t.exports=function(t,e,s){if(o(e))throw TypeError("String#"+s+" doesn't accept regex!");return String(i(t))}},d7db:function(t,e,s){"use strict";var o=s("1a72"),i=s.n(o);i.a}}]);
//# sourceMappingURL=anime.7a36d5b3.js.map