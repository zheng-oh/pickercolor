"use strict";const r=require("../../../../common/vendor.js"),s=require("./icons.js"),n=require("./props.js"),q=require("../../libs/mixin/mpMixin.js"),t=require("../../libs/mixin/mixin.js");require("../../libs/config/props.js");require("../../libs/config/config.js");require("../../libs/config/props/actionSheet.js");require("../../libs/config/props/album.js");require("../../libs/config/props/alert.js");require("../../libs/config/props/avatar.js");require("../../libs/config/props/avatarGroup.js");require("../../libs/config/props/backtop.js");require("../../libs/config/props/badge.js");require("../../libs/config/props/button.js");require("../../libs/config/props/calendar.js");require("../../libs/config/props/carKeyboard.js");require("../../libs/config/props/cell.js");require("../../libs/config/props/cellGroup.js");require("../../libs/config/props/checkbox.js");require("../../libs/config/props/checkboxGroup.js");require("../../libs/config/props/circleProgress.js");require("../../libs/config/props/code.js");require("../../libs/config/props/codeInput.js");require("../../libs/config/props/col.js");require("../../libs/config/props/collapse.js");require("../../libs/config/props/collapseItem.js");require("../../libs/config/props/columnNotice.js");require("../../libs/config/props/countDown.js");require("../../libs/config/props/countTo.js");require("../../libs/config/props/datetimePicker.js");require("../../libs/config/props/divider.js");require("../../libs/config/props/empty.js");require("../../libs/config/props/form.js");require("../../libs/config/props/formItem.js");require("../../libs/config/props/gap.js");require("../../libs/config/props/grid.js");require("../../libs/config/props/gridItem.js");require("../../libs/config/props/icon.js");require("../../libs/config/props/image.js");require("../../libs/config/props/indexAnchor.js");require("../../libs/config/props/indexList.js");require("../../libs/config/props/input.js");require("../../libs/config/props/keyboard.js");require("../../libs/config/props/line.js");require("../../libs/config/props/lineProgress.js");require("../../libs/config/props/link.js");require("../../libs/config/props/list.js");require("../../libs/config/props/listItem.js");require("../../libs/config/props/loadingIcon.js");require("../../libs/config/props/loadingPage.js");require("../../libs/config/props/loadmore.js");require("../../libs/config/props/modal.js");require("../../libs/config/props/navbar.js");require("../../libs/config/color.js");require("../../libs/config/props/noNetwork.js");require("../../libs/config/props/noticeBar.js");require("../../libs/config/props/notify.js");require("../../libs/config/props/numberBox.js");require("../../libs/config/props/numberKeyboard.js");require("../../libs/config/props/overlay.js");require("../../libs/config/props/parse.js");require("../../libs/config/props/picker.js");require("../../libs/config/props/popup.js");require("../../libs/config/props/radio.js");require("../../libs/config/props/radioGroup.js");require("../../libs/config/props/rate.js");require("../../libs/config/props/readMore.js");require("../../libs/config/props/row.js");require("../../libs/config/props/rowNotice.js");require("../../libs/config/props/scrollList.js");require("../../libs/config/props/search.js");require("../../libs/config/props/section.js");require("../../libs/config/props/skeleton.js");require("../../libs/config/props/slider.js");require("../../libs/config/props/statusBar.js");require("../../libs/config/props/steps.js");require("../../libs/config/props/stepsItem.js");require("../../libs/config/props/sticky.js");require("../../libs/config/props/subsection.js");require("../../libs/config/props/swipeAction.js");require("../../libs/config/props/swipeActionItem.js");require("../../libs/config/props/swiper.js");require("../../libs/config/props/swipterIndicator.js");require("../../libs/config/props/switch.js");require("../../libs/config/props/tabbar.js");require("../../libs/config/props/tabbarItem.js");require("../../libs/config/props/tabs.js");require("../../libs/config/props/tag.js");require("../../libs/config/props/text.js");require("../../libs/config/props/textarea.js");require("../../libs/config/props/toast.js");require("../../libs/config/props/toolbar.js");require("../../libs/config/props/tooltip.js");require("../../libs/config/props/transition.js");require("../../libs/config/props/upload.js");const o={name:"u-icon",data(){return{}},emits:["click"],mixins:[q.mpMixin,t.mixin,n.props],computed:{uClasses(){let e=[];return e.push(this.customPrefix+"-"+this.name),this.color&&r.index.$u.config.type.includes(this.color)&&e.push("u-icon__icon--"+this.color),e},iconStyle(){let e={};return e={fontSize:r.index.$u.addUnit(this.size),lineHeight:r.index.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:r.index.$u.addUnit(this.top)},this.color&&!r.index.$u.config.type.includes(this.color)&&(e.color=this.color),e},isImg(){return this.name.indexOf("/")!==-1},imgStyle(){let e={};return e.width=this.width?r.index.$u.addUnit(this.width):r.index.$u.addUnit(this.size),e.height=this.height?r.index.$u.addUnit(this.height):r.index.$u.addUnit(this.size),e},icon(){return s.icons["uicon-"+this.name]||this.name}},methods:{clickHandler(e){this.$emit("click",this.index),this.stop&&this.preventEvent(e)}}};function l(e,a,c,h,m,i){return r.e({a:i.isImg},i.isImg?{b:e.name,c:e.imgMode,d:r.s(i.imgStyle),e:r.s(e.$u.addStyle(e.customStyle))}:{f:r.t(i.icon),g:r.n(i.uClasses),h:r.s(i.iconStyle),i:r.s(e.$u.addStyle(e.customStyle)),j:e.hoverClass},{k:e.label!==""},e.label!==""?{l:r.t(e.label),m:e.labelColor,n:e.$u.addUnit(e.labelSize),o:e.labelPos=="right"?e.$u.addUnit(e.space):0,p:e.labelPos=="bottom"?e.$u.addUnit(e.space):0,q:e.labelPos=="left"?e.$u.addUnit(e.space):0,r:e.labelPos=="top"?e.$u.addUnit(e.space):0}:{},{s:r.o((...u)=>i.clickHandler&&i.clickHandler(...u)),t:r.n("u-icon--"+e.labelPos)})}const d=r._export_sfc(o,[["render",l],["__scopeId","data-v-ac70166d"],["__file","/Users/xingzheng/Desktop/pickercolor/uni_modules/uview-plus/components/u-icon/u-icon.vue"]]);wx.createComponent(d);
