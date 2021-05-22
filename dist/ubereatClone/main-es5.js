(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Projetos Node\PedeAgora\pede-agora\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1UMf":
    /*!************************************************************************!*\
      !*** ./src/app/account/addresses/new-address/new-address.component.ts ***!
      \************************************************************************/

    /*! exports provided: NewAddressComponent */

    /***/
    function UMf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewAddressComponent", function () {
        return NewAddressComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NewAddressComponent = /*#__PURE__*/function () {
        function NewAddressComponent() {
          _classCallCheck(this, NewAddressComponent);
        }

        _createClass(NewAddressComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NewAddressComponent;
      }();

      NewAddressComponent.ɵfac = function NewAddressComponent_Factory(t) {
        return new (t || NewAddressComponent)();
      };

      NewAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NewAddressComponent,
        selectors: [["app-new-address"]],
        decls: 2,
        vars: 0,
        template: function NewAddressComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "new-address works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctYWRkcmVzcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "2daZ":
    /*!******************************************!*\
      !*** ./src/app/reducers/cart.reducer.ts ***!
      \******************************************/

    /*! exports provided: reducerCart */

    /***/
    function daZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducerCart", function () {
        return reducerCart;
      });
      /* harmony import */


      var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../actions/cart.actions */
      "lo8X");

      var initialState = {
        tracker: '',
        orders: new Array()
      };

      function reducerCart() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__["SAVE_CART"]:
            return action.payload;

          case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_ORDER"]:
            return {
              tracker: action.cart.tracker,
              orders: [].concat(_toConsumableArray(state.orders), [action.order])
            };

          case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ORDER"]:
            return {
              tracker: state.tracker,
              orders: _toConsumableArray(replaceItem(state.orders, action.newItem))
            };

          default:
            return state;
        }
      }

      var replaceItem = function replaceItem(orders, newItem) {
        var arr = _toConsumableArray(orders);

        arr.splice(orders.findIndex(function (item) {
          return item.id == newItem.id;
        }), 1);

        if (newItem.quantidade < 1) {
          return _toConsumableArray(arr);
        }

        arr.push(newItem);
        return _toConsumableArray(arr);
      };
      /***/

    },

    /***/
    "320Y":
    /*!***************************************************!*\
      !*** ./src/app/shared/header/header.component.ts ***!
      \***************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _sheduled_deliver_model_sheduled_deliver_model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../sheduled-deliver-model/sheduled-deliver-model.component */
      "4HnF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _material_extended_mde__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @material-extended/mde */
      "+9r9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/restaurant.service */
      "XXB/");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/login.service */
      "EFyh");
      /* harmony import */


      var _services_write_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/write.service */
      "RN/e");
      /* harmony import */


      var _services_read_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/read.service */
      "SYVY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "IRfi");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "j14s");

      function HeaderComponent_div_0_ng_container_6_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_div_0_ng_container_6_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r15.addressButtonToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r13.selectedAddress.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r13.selectedAddress.address);
        }
      }

      function HeaderComponent_div_0_ng_container_6_mat_form_field_2_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var deliveryAddress_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", deliveryAddress_r19.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](deliveryAddress_r19.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](deliveryAddress_r19.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](deliveryAddress_r19.address);
        }
      }

      function HeaderComponent_div_0_ng_container_6_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function HeaderComponent_div_0_ng_container_6_mat_form_field_2_Template_mat_form_field_keyup_enter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r20.addressButtonToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HeaderComponent_div_0_ng_container_6_mat_form_field_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r22.selectedAddress.address = $event;
          })("blur", function HeaderComponent_div_0_ng_container_6_mat_form_field_2_Template_input_blur_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r23.addressButtonToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-autocomplete", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function HeaderComponent_div_0_ng_container_6_mat_form_field_2_Template_mat_autocomplete_selectionChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r24.deliveryAddressChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HeaderComponent_div_0_ng_container_6_mat_form_field_2_mat_option_6_Template, 9, 4, "mat-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r14.selectedAddress.address)("matAutocomplete", _r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r14.selectedAddress.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r14.deliveryAddresses);
        }
      }

      function HeaderComponent_div_0_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HeaderComponent_div_0_ng_container_6_button_1_Template, 7, 2, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HeaderComponent_div_0_ng_container_6_mat_form_field_2_Template, 7, 4, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.inputAddressBoxEnable);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.inputAddressBoxEnable);
        }
      }

      function HeaderComponent_div_0_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.selectedDeliveryTime.data, " ");
        }
      }

      function HeaderComponent_div_0_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.selectedDeliveryTime.title, " ");
        }
      }

      function HeaderComponent_div_0_mat_option_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var time_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", time_r25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](time_r25.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", time_r25.title, " ");
        }
      }

      function HeaderComponent_div_0_a_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mdePopoverTriggerFor", _r1)("mdePopoverOffsetX", 0)("mdePopoverOffsetY", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.cartItems.length);
        }
      }

      var _c0 = function _c0() {
        return ["/my-account"];
      };

      function HeaderComponent_div_0_a_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.firstName);
        }
      }

      var _c1 = function _c1() {
        return ["/login"];
      };

      function HeaderComponent_div_0_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function HeaderComponent_div_0_button_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_div_0_button_24_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r26.searchButtonToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Pesquisar");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_div_0_mat_form_field_25_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "access_time");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var food_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", food_r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](food_r30);
        }
      }

      function HeaderComponent_div_0_mat_form_field_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function HeaderComponent_div_0_mat_form_field_25_Template_mat_form_field_keyup_enter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r31.searchButtonToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function HeaderComponent_div_0_mat_form_field_25_Template_input_blur_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r33.searchButtonToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "access_time");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-autocomplete", 51, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HeaderComponent_div_0_mat_form_field_25_mat_option_9_Template, 5, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.searchableFoods);
        }
      }

      function HeaderComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HeaderComponent_div_0_ng_container_6_Template, 3, 2, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HeaderComponent_div_0_Template_mat_select_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r34.selectedDeliveryTime = $event;
          })("selectionChange", function HeaderComponent_div_0_Template_mat_select_selectionChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r36.deliveryTimeSelectionChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, HeaderComponent_div_0_span_15_Template, 2, 1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, HeaderComponent_div_0_span_16_Template, 2, 1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, HeaderComponent_div_0_mat_option_17_Template, 4, 3, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, HeaderComponent_div_0_a_19_Template, 7, 4, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, HeaderComponent_div_0_a_21_Template, 7, 3, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, HeaderComponent_div_0_ng_template_22_Template, 7, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, HeaderComponent_div_0_button_24_Template, 7, 0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, HeaderComponent_div_0_mat_form_field_25_Template, 10, 2, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.selectedDeliveryTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.selectedDeliveryTime.icon, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedDeliveryTime.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.selectedDeliveryTime.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.deliveryTimeSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.cartItems && ctx_r0.cartItems.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.loggedIn)("ngIfElse", _r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.searchInputBoxEnable);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.searchInputBoxEnable);
        }
      }

      function HeaderComponent_div_3_li_12_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var quantityValue_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", quantityValue_r41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", quantityValue_r41, " ");
        }
      }

      function HeaderComponent_div_3_li_12_div_9_mat_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" + ", item_r38.extras[3].length, " complemento(s)");
        }
      }

      function HeaderComponent_div_3_li_12_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HeaderComponent_div_3_li_12_div_9_mat_label_3_Template, 2, 1, "mat-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r38.extras[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r38.extras[3].length > 0);
        }
      }

      function HeaderComponent_div_3_li_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-select", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function HeaderComponent_div_3_li_12_Template_mat_select_selectionChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);

            var item_r38 = ctx.$implicit;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r45.addToCart($event, item_r38);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HeaderComponent_div_3_li_12_mat_option_4_Template, 2, 2, "mat-option", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HeaderComponent_div_3_li_12_div_9_Template, 4, 2, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_div_3_li_12_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);

            var item_r38 = ctx.$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r47.removeFromCart(item_r38);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Retirar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r38 = ctx.$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r38.quantidade);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r37.quantityList);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r38.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r38.extras[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r37.calcularItem(item_r38).toFixed(2), " \u20AC");
        }
      }

      var _c2 = function _c2() {
        return ["/checkout"];
      };

      function HeaderComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_div_3_Template_mat_icon_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r48.closeCartPopover();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, HeaderComponent_div_3_li_12_Template, 14, 5, "li", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_div_3_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r50.closeCartPopover();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Finalizar pedido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("O Seu pedido (", ctx_r2.cartItems.length, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.cartItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.calculateTotalPriceOfCart().toFixed(2), " \u20AC ");
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(dialog, router, activatedRoute, restaurantService, loginService, writeService, readService) {
          var _this = this;

          _classCallCheck(this, HeaderComponent);

          this.dialog = dialog;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.restaurantService = restaurantService;
          this.loginService = loginService;
          this.writeService = writeService;
          this.readService = readService;
          this.quantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          this.deliveryTimeSelection = [{
            'icon': 'access_time',
            'title': 'Entregar Já'
          }, {
            'icon': 'calendar_today',
            'title': 'Planear pra mais tarde'
          }];
          this.deliveryAddresses = new Array();
          this.cartItems = new Array();
          this.inputAddressBoxEnable = false;
          this.searchInputBoxEnable = false;
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this.currentRoute = _this.router.url;
            }
          });
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.loadToken();
            this.selectedDeliveryTime = this.deliveryTimeSelection[0];
            this.selectedAddress = this.deliveryAddresses[0];
            this.readService.getCart().subscribe(function (data) {
              _this2.cartItems = data.orders;
            });
          }
        }, {
          key: "selectDefaultAddress",
          value: function selectDefaultAddress(listOfAddresses) {
            var _this3 = this;

            listOfAddresses.forEach(function (element) {
              if (element["default"]) {
                _this3.selectedAddress = element;
              }
            });
          }
        }, {
          key: "addressButtonToggle",
          value: function addressButtonToggle() {
            this.inputAddressBoxEnable = !this.inputAddressBoxEnable;
          }
        }, {
          key: "searchButtonToggle",
          value: function searchButtonToggle() {
            this.searchableFoods = this.restaurantService.getTags().slice(0, 5);
            this.searchInputBoxEnable = !this.searchInputBoxEnable;
          }
        }, {
          key: "deliveryTimeSelectionChange",
          value: function deliveryTimeSelectionChange(event) {
            if (this.selectedDeliveryTime.title == "Scheduler For Later") {
              this.openDialog();
            }
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var _this4 = this;

            var dialogRef = this.dialog.open(_sheduled_deliver_model_sheduled_deliver_model_component__WEBPACK_IMPORTED_MODULE_0__["SheduledDeliverModelComponent"], {
              width: '450px',
              data: {
                deliveryDate: this.deliveryDate,
                deliveryTime: this.deliveryTime
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this4.deliveryDate = result.deliveryDate;
                _this4.deliveryTime = result.deliveryTime;
                _this4.selectedDeliveryTime.data = result.deliveryDate + ' ' + result.deliveryTime;
              } else {
                _this4.selectedDeliveryTime = _this4.deliveryTimeSelection[0];
              }
            });
          }
        }, {
          key: "deliveryAddressChange",
          value: function deliveryAddressChange(event) {
            console.log(event);
          }
        }, {
          key: "calcularItem",
          value: function calcularItem(item) {
            var total = (item.preco + item.extras[1]) * item.quantidade;

            if (item.extras[3].length > 0) {
              item.extras[3].forEach(function (extra) {
                total += extra.preco;
              });
            }

            return total;
          }
        }, {
          key: "calculateTotalPriceOfCart",
          value: function calculateTotalPriceOfCart() {
            var total = 0;
            this.cartItems.forEach(function (element) {
              total += element.preco + element.extras[1] * element.quantidade;

              if (element.extras[3].length > 0) {
                element.extras[3].forEach(function (extra) {
                  total += extra.preco;
                });
              }
            });
            return total;
          }
        }, {
          key: "logout",
          value: function logout() {
            this.user = null;
            this.router.navigate(['home']);
          }
        }, {
          key: "addToCart",
          value: function addToCart(event, item) {
            var newItem = Object.assign({}, item);
            newItem.quantidade = event.value;
            this.writeService.updateItem(newItem);
          }
        }, {
          key: "removeFromCart",
          value: function removeFromCart(item) {
            var newItem = Object.assign({}, item);
            newItem.quantidade = 0;
            this.writeService.updateItem(newItem);
          }
        }, {
          key: "closeCartPopover",
          value: function closeCartPopover() {
            this.trigger.toArray()[0].togglePopover();
          }
        }, {
          key: "loadToken",
          value: function loadToken() {
            var _this5 = this;

            this.readService.getAccount().subscribe(function (data) {
              if (data) {
                var token = _this5.readService.extractToken(data);

                if (token) {
                  _this5.loginService.validateToken(token).subscribe(function (data) {
                    if (!data || data.error) {
                      _this5.router.navigate(['/login']);
                    }

                    data.account.token = token;
                    _this5.user = data.account;
                    _this5.loggedIn = true;
                    _this5.firstName = _this5.user.nome.split(' ')[0].trim();
                  });
                }
              }
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_restaurant_service__WEBPACK_IMPORTED_MODULE_5__["RestaurantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_write_service__WEBPACK_IMPORTED_MODULE_7__["WriteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_read_service__WEBPACK_IMPORTED_MODULE_8__["ReadService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        viewQuery: function HeaderComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_material_extended_mde__WEBPACK_IMPORTED_MODULE_2__["MdePopoverTrigger"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.trigger = _t);
          }
        },
        decls: 4,
        vars: 3,
        consts: [["class", "header-container", 4, "ngIf"], [3, "mdePopoverCloseOnClick"], ["cartPopover", "mdePopover"], ["class", "popover cart-card flex-column", 4, "ngIf"], [1, "header-container"], [1, "contain", "flex-with-space-between", "white-background"], [1, "left-container", "flex-item-center", "flex1", "full-height"], ["routerLink", "restaurant", 1, "logo"], ["src", "../assets/logo.png"], [1, "large-gap"], [4, "ngIf"], [1, "small-gap"], ["appearance", "none", 1, "hide-mobile-view", 2, "min-width", "190px", "margin-top", "10px"], [3, "ngModel", "ngModelChange", "selectionChange"], [1, "header-menu-box", 2, "white-space", "initial"], ["fontSet", "material-icons-outlined", 1, "icon"], [1, "very-small-gap"], ["class", "header-menu-text", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "reverse-flex", "flex1", "full-height"], ["mat-button", "", "mdePopoverTriggerOn", "click", 3, "mdePopoverTriggerFor", "mdePopoverOffsetX", "mdePopoverOffsetY", 4, "ngIf"], ["mat-button", "", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["conta", ""], ["mat-button", "", "class", "hide-mobile-view", 3, "click", 4, "ngIf"], ["style", "margin-top: 10px;", "floatLabel", "never", 3, "keyup.enter", 4, "ngIf"], ["class", "hide-mobile-view", "mat-button", "", 3, "click", 4, "ngIf"], ["class", "hide-mobile-view", "style", "min-width: 380px; margin-top: 10px; ", 3, "keyup.enter", 4, "ngIf"], ["mat-button", "", 1, "hide-mobile-view", 3, "click"], [1, "header-menu-box", 2, "max-width", "460px"], [1, "header-menu-text", 2, "max-width", "420px"], [1, "hide-mobile-view", 2, "min-width", "380px", "margin-top", "10px", 3, "keyup.enter"], ["matInput", "", "type", "text", 2, "padding-bottom", "5px", "font-size", "14px", 3, "ngModel", "matAutocomplete", "ngModelChange", "blur"], ["fontSet", "material-icons-outlined", "matPrefix", "", "mat-icon-button", "", 1, "icon", 2, "margin-right", "5px"], ["autoActiveFirstOption", "", 3, "selectionChange"], ["auto", "matAutocomplete"], ["style", "height: 80px;", 3, "value", 4, "ngFor", "ngForOf"], [2, "height", "80px", 3, "value"], [2, "display", "-webkit-box"], ["fontSet", "material-icons-outlined", "mat-icon-button", "", 1, "icon", 2, "margin-right", "5px"], [1, "flex-column"], [1, "header-menu-text"], [3, "value"], ["mat-button", "", "mdePopoverTriggerOn", "click", 3, "mdePopoverTriggerFor", "mdePopoverOffsetX", "mdePopoverOffsetY"], [1, "header-menu-box"], ["fontSet", "material-icons-outlined"], [1, "micro-gap"], ["mat-button", "", "routerLinkActive", "active", 3, "routerLink"], ["floatLabel", "never", 2, "margin-top", "10px", 3, "keyup.enter"], ["matInput", "", "type", "text", "placeholder", "O que lhe apetece", 2, "padding-bottom", "5px", "font-size", "14px", 3, "matAutocomplete", "blur"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear"], [2, "padding-bottom", "5px"], ["autoActiveFirstOption", ""], [1, "popover", "cart-card", "flex-column"], [1, "cart-card-header", "flex-with-space-between", "padding-horizontaly"], [1, "flex-item-center"], ["fontSet", "material-icons-outlined", 3, "click"], [1, "cart-card-body"], ["class", "flex-with-space-between padding", 4, "ngFor", "ngForOf"], [1, "cart-card-footer", "padding"], ["mat-raised-button", "", 1, "full-width", "full-height", "success-background", 3, "routerLink", "click"], [1, "flex-with-space-between"], [1, "flex-with-space-between", "padding"], ["color", "dark", 2, "width", "30px", "background", "transparent"], [2, "text-align", "center !important", 3, "ngModel", "selectionChange"], ["style", "margin-left: 5px !important;", 3, "value", 4, "ngFor", "ngForOf"], ["class", "flex-column label-small", 4, "ngIf"], [1, "accent", 2, "margin-top", "5px", 3, "click"], [2, "margin-left", "5px !important", 3, "value"], [1, "flex-column", "label-small"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HeaderComponent_div_0_Template, 26, 11, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mde-popover", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HeaderComponent_div_3_Template, 20, 5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentRoute !== "/login" && ctx.currentRoute !== "/signup");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mdePopoverCloseOnClick", ctx.enableClosePopover);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cartItems && ctx.cartItems.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _material_extended_mde__WEBPACK_IMPORTED_MODULE_2__["MdePopover"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectTrigger"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatPrefix"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _material_extended_mde__WEBPACK_IMPORTED_MODULE_2__["MdePopoverTrigger"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"]],
        styles: [".header-container[_ngcontent-%COMP%] {\n  box-shadow: 0 15px 40px -20px rgba(40, 44, 63, 0.15);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 80px;\n  z-index: 1;\n  will-change: transform;\n  transform: translateZ(0);\n  transition: transform 0.3s ease;\n  contain: size layout style;\n}\n.header-container[_ngcontent-%COMP%]   .contain[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  height: 80px;\n  padding: 0 75px;\n}\n.logo[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n}\n.header-menu-box[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.header-menu-box[_ngcontent-%COMP%]   .header-menu-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.popover[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n  z-index: 1;\n  border-radius: 2px;\n  padding: 0px;\n  padding-top: 5px;\n  background-color: #fff;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #f6f6f6;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;\n  width: 180px;\n}\n.popover[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.popover[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   .profile-dropdown-item[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  color: black;\n  font-size: 15px;\n  cursor: pointer;\n  font-weight: 400;\n}\n.popover[_ngcontent-%COMP%]   .profile-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f6f6f6;\n}\n.label-small[_ngcontent-%COMP%] {\n  size: 5px;\n  color: #555252;\n  text-align: end;\n}\n\n@media screen and (max-width: 1100px) {\n  .hide-mobile-view[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYWNjb3VudFxcYWRkcmVzc2VzXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvREFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ1I7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUjtBQUdBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtBQUFKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNSO0FBQVE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVaO0FBQVE7RUFDSSxtQkFBQTtBQUVaO0FBR0E7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBSjtBQUlBLHNCQUFBO0FBQ0E7RUFDSTtJQUNJLGFBQUE7RUFETjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVye1xuICAgIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IC0yMHB4IHJnYmEoNDAsNDQsNjMsLjE1KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlO1xuICAgIGNvbnRhaW46IHNpemUgbGF5b3V0IHN0eWxlO1xuICAgXG4gICAgLmNvbnRhaW4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7ICBcbiAgICAgICAgcGFkZGluZzogMCA3NXB4O1xuICAgIH1cbn1cbi5sb2dve1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlci1tZW51LWJveHtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgIFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAuaGVhZGVyLW1lbnUtdGV4dHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG59XG5cblxuLnBvcG92ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0NiwgMjQ2LCAyNDYpO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMHB4IDEwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIC5wcm9maWxlLWRyb3Bkb3duIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLnByb2ZpbGUtZHJvcGRvd24taXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgICAgICBsaTpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDYsIDI0NiwgMjQ2KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxhYmVsLXNtYWxse1xuICAgIHNpemU6NXB4O1xuICAgIGNvbG9yOiByZ2IoODUsIDgyLCA4Mik7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAuaGlkZS1tb2JpbGUtdmlldyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "34WV":
    /*!***************************************************!*\
      !*** ./src/app/shared/signup/signup.component.ts ***!
      \***************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function WV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_write_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/write.service */
      "RN/e");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "IRfi");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");

      var _c0 = function _c0() {
        return ["/login"];
      };

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(loginService, router, writeService) {
          _classCallCheck(this, SignupComponent);

          this.loginService = loginService;
          this.router = router;
          this.writeService = writeService;
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signInFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
              apelido: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
              nif: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
              telefone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(9)),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
              morada: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
              codigopostal: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
              cidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
            });
          }
        }, {
          key: "signUp",
          value: function signUp() {
            var _this6 = this;

            if (this.signInFormGroup.valid) {
              this.loginService.signIn(this.signInFormGroup.value).subscribe(function (data) {
                if (data) {
                  _this6.writeService.addAccount(data);

                  _this6.router.navigate(['/home']);
                }
              });
            }
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_write_service__WEBPACK_IMPORTED_MODULE_4__["WriteService"]));
      };

      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 58,
        vars: 3,
        consts: [[1, "signup-container"], [1, "signup-logo"], ["src", "../assets/logo_orig.png", 1, "fadeIn"], [1, "signup-form"], [3, "formGroup", "ngSubmit"], [1, "signup-data-column"], [2, "margin-bottom", "10px"], ["appearance", "outline", 1, "input-box", "full-width"], ["matInput", "", "placeholder", "Nome", "type", "text", "formControlName", "nome", 1, "input-text", "full-width"], ["matInput", "", "placeholder", "Apelido", "type", "text", "formControlName", "apelido", 1, "input-text", "full-width"], ["matInput", "", "placeholder", "NIF", "type", "text", "formControlName", "nif", 1, "input-text", "full-width"], ["appearance", "outline", 1, "input-box", "half-width"], ["matInput", "", "placeholder", "Numero de telefone", "formControlName", "telefone", 1, "input-text"], ["matInput", "", "placeholder", "Endere\xE7o E-mail", "formControlName", "email", 1, "input-text"], ["matInput", "", "placeholder", "Password", "type", "password", "formControlName", "password", 1, "input-text", "full-width"], ["matInput", "", "placeholder", "Repita a password", "type", "password", 1, "input-text"], ["matInput", "", "placeholder", "Morada", "type", "text", "formControlName", "morada", 1, "input-text"], ["appearance", "outline", 1, "input-box", "fourth-width"], ["matInput", "", "placeholder", "C\xF3digo Postal", "type", "text", "formControlName", "codigopostal", 1, "input-text"], ["matInput", "", "placeholder", "Cidade/Vila", "type", "text", "formControlName", "cidade", 1, "input-text"], ["mat-raised-button", "", "type", "submit", 1, "full-width", "full-height", "accent-background", 2, "height", "45px"], [2, "text-align", "center", "margin-top", "15px"], ["routerLinkActive", "active", 3, "routerLink"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_4_listener() {
              return ctx.signUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Criar uma conta com numero de telefone e E-mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Nome");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Apelido");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "NIF");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Numero de telefone");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Endere\xE7o E-mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Repita a password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Morada");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-form-field", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "C\xF3digo Postal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-form-field", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Cidade/Vila");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Criar Conta ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "J\xE1 tem uma conta?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signInFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
        styles: [".signup-container[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  width: 100%;\n  min-height: 450px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n}\n.signup-container[_ngcontent-%COMP%]   .signup-logo[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n.signup-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n  max-width: 40%;\n}\n.signup-data-column[_ngcontent-%COMP%] {\n  flex-flow: row;\n}\n.half-width[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.fourth-width[_ngcontent-%COMP%] {\n  width: 25%;\n}\na[_ngcontent-%COMP%] {\n  color: #cca028;\n  -webkit-text-decoration-color: #cca028;\n          text-decoration-color: #cca028;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYWNjb3VudFxcYWRkcmVzc2VzXFxzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7QUFDUjtBQUdBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7QUFBSjtBQUdBO0VBQ0ksVUFBQTtBQUFKO0FBR0E7RUFDSSxVQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FBQUoiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAuc2lnbnVwLWxvZ28ge1xuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgfVxufVxuXG4uc2lnbnVwLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXgtd2lkdGg6IDQwJTtcbn1cblxuLnNpZ251cC1kYXRhLWNvbHVtbntcbiAgICBmbGV4LWZsb3c6IHJvdztcbn1cblxuLmhhbGYtd2lkdGh7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmZvdXJ0aC13aWR0aHtcbiAgICB3aWR0aDogMjUlO1xufVxuXG5he1xuICAgIGNvbG9yOiByZ2IoMjA0LCAxNjAsIDQwKTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJnYigyMDQsIDE2MCwgNDApO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "4HnF":
    /*!***********************************************************************************!*\
      !*** ./src/app/shared/sheduled-deliver-model/sheduled-deliver-model.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: SheduledDeliverModelComponent */

    /***/
    function HnF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SheduledDeliverModelComponent", function () {
        return SheduledDeliverModelComponent;
      });
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "IRfi");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "j14s");

      function SheduledDeliverModelComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var date_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", date_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", date_r2, " ");
        }
      }

      function SheduledDeliverModelComponent_mat_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var time_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", time_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", time_r3, " ");
        }
      }

      var SheduledDeliverModelComponent = /*#__PURE__*/function () {
        function SheduledDeliverModelComponent(dialogRef, data) {
          _classCallCheck(this, SheduledDeliverModelComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.dates = ["Today, Mon, 21 Oct", "Tomorrow, Tue, 22 Oct", "Wed, 23 Oct", "Thu, 24 Oct", "Fri, 25 Oct", "Sat, 26 Oct", "Sun, 27 Oct"];
          this.times = ["01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am", "01:00 am – 01:30 am"];
        }

        _createClass(SheduledDeliverModelComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.data.deliveryDate) {
              this.data.deliveryDate = this.dates[0];
              this.data.deliveryTime = this.times[0];
            }
          }
        }]);

        return SheduledDeliverModelComponent;
      }();

      SheduledDeliverModelComponent.ɵfac = function SheduledDeliverModelComponent_Factory(t) {
        return new (t || SheduledDeliverModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
      };

      SheduledDeliverModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SheduledDeliverModelComponent,
        selectors: [["app-sheduled-deliver-model"]],
        decls: 23,
        vars: 5,
        consts: [[1, "scheduled-model-container"], [1, "model-header"], ["mat-mini-fab", "", "color", "default"], ["fontSet", "material-icons-outlined", "mat-icon-button", "", 1, "icon", 3, "click"], [1, "model-body"], [1, "dropdown"], ["floatLabel", "never", 1, "full-width"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "model-footer"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "full-width", "full-height", "success-background", 3, "mat-dialog-close"], [3, "value"]],
        template: function SheduledDeliverModelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Schedule delivery time");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SheduledDeliverModelComponent_Template_mat_icon_click_5_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SheduledDeliverModelComponent_Template_mat_select_ngModelChange_12_listener($event) {
              return ctx.data.deliveryDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SheduledDeliverModelComponent_mat_option_13_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SheduledDeliverModelComponent_Template_mat_select_ngModelChange_18_listener($event) {
              return ctx.data.deliveryTime = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SheduledDeliverModelComponent_mat_option_19_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Set delivery time ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.deliveryDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dates);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.deliveryTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.times);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.data);
          }
        },
        directives: [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"]],
        styles: [".scheduled-model-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.scheduled-model-container[_ngcontent-%COMP%]   .model-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.scheduled-model-container[_ngcontent-%COMP%]   .model-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 30px 0px 0px;\n}\n.scheduled-model-container[_ngcontent-%COMP%]   .model-body[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.scheduled-model-container[_ngcontent-%COMP%]   .model-footer[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.mat-select-arrow[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYWNjb3VudFxcYWRkcmVzc2VzXFxzaGVkdWxlZC1kZWxpdmVyLW1vZGVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUVSO0FBRFE7RUFDSSxtQkFBQTtBQUdaO0FBQUk7RUFDSSxZQUFBO0FBRVI7QUFDQTtFQUNJLDhCQUFBO0FBRUoiLCJmaWxlIjoic2hlZHVsZWQtZGVsaXZlci1tb2RlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2hlZHVsZWQtbW9kZWwtY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLm1vZGVsLWhlYWRlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAubW9kZWwtYm9keXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDBweCAwcHg7XG4gICAgICAgIC5kcm9wZG93bntcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1vZGVsLWZvb3RlcntcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbn1cbi5tYXQtc2VsZWN0LWFycm93IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "6LmY":
    /*!******************************************************************************!*\
      !*** ./src/app/single-restaurant/add-item-model/add-item-model.component.ts ***!
      \******************************************************************************/

    /*! exports provided: AddItemModelComponent */

    /***/
    function LmY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddItemModelComponent", function () {
        return AddItemModelComponent;
      });
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/cart.service */
      "c14U");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "IRfi");

      function AddItemModelComponent_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 23);
        }
      }

      function AddItemModelComponent_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 24);
        }
      }

      function AddItemModelComponent_div_12_mat_radio_button_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tamanho_r7 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", tamanho_r7.nome)("checked", false)("value", ctx_r5.parseTamanho(tamanho_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tamanho_r7.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(+", tamanho_r7.preco, "\u20AC)");
        }
      }

      function AddItemModelComponent_div_12_div_7_div_1_ng_container_1_mat_radio_button_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opcao_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", opcao_r14.nome)("checked", false)("value", opcao_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](opcao_r14.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(+", opcao_r14.preco, "\u20AC)");
        }
      }

      function AddItemModelComponent_div_12_div_7_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-radio-group", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddItemModelComponent_div_12_div_7_div_1_ng_container_1_Template_mat_radio_group_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r15.onChangeExtra($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AddItemModelComponent_div_12_div_7_div_1_ng_container_1_mat_radio_button_5_Template, 4, 5, "mat-radio-button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var extra_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("*", extra_r9.nome, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", extra_r9.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", extra_r9.opcoes);
        }
      }

      function AddItemModelComponent_div_12_div_7_div_1_ng_template_2_mat_checkbox_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-checkbox", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddItemModelComponent_div_12_div_7_div_1_ng_template_2_mat_checkbox_3_Template_mat_checkbox_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);

            return ctx_r20.onChangeCheckBox($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opcao_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", opcao_r19.nome)("checked", false)("value", opcao_r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](opcao_r19.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(+", opcao_r19.preco, "\u20AC)");
        }
      }

      function AddItemModelComponent_div_12_div_7_div_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddItemModelComponent_div_12_div_7_div_1_ng_template_2_mat_checkbox_3_Template, 4, 5, "mat-checkbox", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var extra_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](extra_r9.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", extra_r9.opcoes);
        }
      }

      function AddItemModelComponent_div_12_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddItemModelComponent_div_12_div_7_div_1_ng_container_1_Template, 6, 3, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddItemModelComponent_div_12_div_7_div_1_ng_template_2_Template, 4, 2, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var extra_r9 = ctx.$implicit;

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", extra_r9.force_min > 0)("ngIfElse", _r11);
        }
      }

      function AddItemModelComponent_div_12_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddItemModelComponent_div_12_div_7_div_1_Template, 4, 2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.extra.grupos);
        }
      }

      function AddItemModelComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "*Tamanhos:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-radio-group", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddItemModelComponent_div_12_Template_mat_radio_group_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AddItemModelComponent_div_12_mat_radio_button_6_Template, 4, 5, "mat-radio-button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddItemModelComponent_div_12_div_7_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.produto.tamanhos);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.subOptions);
        }
      }

      function AddItemModelComponent_13_ng_template_0_div_0_mat_radio_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opcao_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", opcao_r31.nome)("checked", false)("value", opcao_r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](opcao_r31.nome);
        }
      }

      function AddItemModelComponent_13_ng_template_0_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-radio-group", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changeRadio", function AddItemModelComponent_13_ng_template_0_div_0_Template_mat_radio_group_changeRadio_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r32.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddItemModelComponent_13_ng_template_0_div_0_mat_radio_button_4_Template, 2, 4, "mat-radio-button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var grupo_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("*", grupo_r25.nome, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", grupo_r25.nome)("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", grupo_r25.opcoes);
        }
      }

      function AddItemModelComponent_13_ng_template_0_div_1_mat_checkbox_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-checkbox", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changeRadio", function AddItemModelComponent_13_ng_template_0_div_1_mat_checkbox_3_Template_mat_checkbox_changeRadio_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r37.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opcao_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", opcao_r36.nome)("checked", false)("value", opcao_r36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](opcao_r36.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(+", opcao_r36.preco, "\u20AC)");
        }
      }

      function AddItemModelComponent_13_ng_template_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddItemModelComponent_13_ng_template_0_div_1_mat_checkbox_3_Template, 4, 5, "mat-checkbox", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var grupo_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", grupo_r25.nome, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", grupo_r25.opcoes);
        }
      }

      function AddItemModelComponent_13_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddItemModelComponent_13_ng_template_0_div_0_Template, 5, 4, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddItemModelComponent_13_ng_template_0_div_1_Template, 4, 2, "div", 36);
        }

        if (rf & 2) {
          var grupo_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", grupo_r25.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !grupo_r25.required);
        }
      }

      function AddItemModelComponent_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddItemModelComponent_13_ng_template_0_Template, 2, 2, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }
      }

      function AddItemModelComponent_div_14_ng_container_1_div_2_mat_radio_button_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opcao_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", opcao_r47.nome)("checked", false)("value", opcao_r47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](opcao_r47.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(+", opcao_r47.preco, "\u20AC)");
        }
      }

      function AddItemModelComponent_div_14_ng_container_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-radio-group", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddItemModelComponent_div_14_ng_container_1_div_2_Template_mat_radio_group_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r48.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AddItemModelComponent_div_14_ng_container_1_div_2_mat_radio_button_5_Template, 4, 5, "mat-radio-button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var grupo_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("*", grupo_r42.nome, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", grupo_r42.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", grupo_r42.opcoes);
        }
      }

      function AddItemModelComponent_div_14_ng_container_1_ng_template_3_mat_checkbox_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-checkbox", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddItemModelComponent_div_14_ng_container_1_ng_template_3_mat_checkbox_3_Template_mat_checkbox_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r53.onChangeCheckBox($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opcao_r52 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", opcao_r52.nome)("checked", false)("value", opcao_r52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](opcao_r52.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(+", opcao_r52.preco, "\u20AC)");
        }
      }

      function AddItemModelComponent_div_14_ng_container_1_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddItemModelComponent_div_14_ng_container_1_ng_template_3_mat_checkbox_3_Template, 4, 5, "mat-checkbox", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var grupo_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](grupo_r42.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", grupo_r42.opcoes);
        }
      }

      function AddItemModelComponent_div_14_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddItemModelComponent_div_14_ng_container_1_div_2_Template, 6, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddItemModelComponent_div_14_ng_container_1_ng_template_3_Template, 4, 2, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var grupo_r42 = ctx.$implicit;

          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", grupo_r42.force_min > 0 && grupo_r42.nome != "Extras")("ngIfElse", _r44);
        }
      }

      function AddItemModelComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddItemModelComponent_div_14_ng_container_1_Template, 5, 2, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.produto.grupos);
        }
      }

      var AddItemModelComponent = /*#__PURE__*/function () {
        function AddItemModelComponent(dialogRef, data, cartService) {
          _classCallCheck(this, AddItemModelComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.cartService = cartService;
          this.itemCount = 1;
          this.isDisabled = false;
          this.extra = {
            preco: 0
          };
          this.radioOption = new Array();
          this.extraPrice = 0;
          this.options = new Array();
          this.optionPrice = 0;
          this.totalPrice = 0;
          this.totalSelected = 0;
          this.produto = Object.assign({}, data[0]);
          this.grupos = _toConsumableArray(data[1]);

          if (this.produto.quantidade > 0) {
            this.itemCount = this.produto.quantidade;
          }

          if (this.produto.tamanhos.length > 0) {
            this.isDisabled = true;
          }
        }

        _createClass(AddItemModelComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "add",
          value: function add() {
            this.itemCount += 1;
          }
        }, {
          key: "remove",
          value: function remove() {
            this.itemCount -= 1;
          }
        }, {
          key: "onChange",
          value: function onChange(radio) {
            var _a;

            if (((_a = radio.value.grupos) === null || _a === void 0 ? void 0 : _a.length) > 0) {
              this.subOptions = true;
            }

            this.totalSelected++;

            if (this.subOptions) {
              this.isDisabled = true;
            } else {
              this.isDisabled = false;
            }

            this.extra = radio.value;
          }
        }, {
          key: "onChangeExtra",
          value: function onChangeExtra(radio) {
            var _this7 = this;

            this.radioOption[radio.source.name] = radio.value;
            this.extraPrice = 0;
            this.radioOption.forEach(function (data) {
              _this7.extraPrice += data;
            });
            this.totalSelected++;

            if (this.subOptions && this.totalSelected > 2) {
              this.isDisabled = false;
            }
          }
        }, {
          key: "parseTamanho",
          value: function parseTamanho(tamanho) {
            return {
              nome: tamanho.nome,
              preco: tamanho.preco,
              grupos: tamanho.grupos
            };
          }
        }, {
          key: "onChangeCheckBox",
          value: function onChangeCheckBox(check) {
            var _this8 = this;

            var value = check.source.value;

            if (check.checked) {
              this.options.push(value);
            } else {
              this.options = this.options.filter(function (val) {
                return val.id != value.id;
              });
            }

            this.optionPrice = 0;
            this.options.forEach(function (data) {
              _this8.optionPrice += data.preco;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {// if (!this.data.deliveryDate) {
            //   this.data.deliveryDate = this.dates[0];
            //   this.data.deliveryTime = this.times[0];
            // }
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            this.totalSelected = 0;
            this.produto.quantidade = this.itemCount;
            this.produto.extras = [this.extra.nome, this.extra.preco, this.radioOption, this.options];
            this.cartService.addToCart(this.produto);
          }
        }]);

        return AddItemModelComponent;
      }();

      AddItemModelComponent.ɵfac = function AddItemModelComponent_Factory(t) {
        return new (t || AddItemModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]));
      };

      AddItemModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddItemModelComponent,
        selectors: [["app-add-item-model"]],
        inputs: {
          isDisabled: "isDisabled",
          totalPrice: "totalPrice"
        },
        outputs: {
          changeRadio: "changeRadio"
        },
        decls: 37,
        vars: 13,
        consts: [[1, "add-item-model-container"], [1, "model-header"], [1, "flex-item-center"], ["src", "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/511904b5d7cd6881bc88882d4089e3bb.svg", "width", "12px", "height", "12px", 4, "ngIf"], ["src", "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d049360b6709dd54ea5ff0689849db7a.svg", "width", "12px", "height", "12px", 4, "ngIf"], [1, "very-small-gap"], ["mat-mini-fab", "", "color", "default", 3, "click"], ["fontSet", "material-icons-outlined", "mat-icon-button", "", 1, "icon"], [1, "model-body"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "instruction"], [2, "padding", "0px 20px"], [2, "margin-top", "20px", "padding", "0px 20px"], [1, "full-width"], ["matInput", "", "placeholder", "Deixe informa\xE7oes para o entregador/restaurante"], [1, "model-footer", "flex-item-center"], ["mat-mini-fab", "", "color", "default", 2, "margin-right", "10px", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "default", 2, "margin-left", "10px", 3, "click"], [1, "small-gap"], ["mat-raised-button", "", "cdkFocusInitial", "", "id", "addCartButton", 1, "full-width", "full-height", "success-background", 3, "mat-dialog-close", "disabled", "click"], [2, "float", "right"], ["src", "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/511904b5d7cd6881bc88882d4089e3bb.svg", "width", "12px", "height", "12px"], ["src", "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d049360b6709dd54ea5ff0689849db7a.svg", "width", "12px", "height", "12px"], ["name", "tamanhos", 3, "required", "change"], ["style", "padding: 0px 20px;", 3, "name", "checked", "value", 4, "ngFor", "ngForOf"], [2, "padding", "0px 20px", 3, "name", "checked", "value"], ["class", "options", 4, "ngFor", "ngForOf"], [1, "options"], ["checkExtra", ""], [2, "padding", "15px 20px"], [3, "name", "change"], ["style", "padding: 0px 20px;", 3, "name", "checked", "value", "change", 4, "ngFor", "ngForOf"], [2, "padding", "0px 20px", 3, "name", "checked", "value", "change"], ["grupos", ""], ["class", "instruction", 4, "ngIf"], [3, "name", "required", "changeRadio"], ["style", "padding: 0px 20px;", 3, "name", "checked", "value", "changeRadio", 4, "ngFor", "ngForOf"], [2, "padding", "0px 20px", 3, "name", "checked", "value", "changeRadio"], ["checkExtraProduto", ""]],
        template: function AddItemModelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddItemModelComponent_img_3_Template, 1, 0, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddItemModelComponent_img_4_Template, 1, 0, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddItemModelComponent_Template_button_click_8_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddItemModelComponent_div_12_Template, 8, 3, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddItemModelComponent_13_Template, 2, 0, undefined, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddItemModelComponent_div_14_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Instru\xE7\xF5es extra");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "textarea", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddItemModelComponent_Template_button_click_23_listener() {
              return ctx.remove();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "remove");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddItemModelComponent_Template_button_click_28_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddItemModelComponent_Template_button_click_32_listener() {
              return ctx.addToCart();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.produto.type === "veg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.produto.type === "nonveg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.produto.nome);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.produto.tamanhos.length > 0)("ngIfElse", ctx.grupos);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.grupos);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.produto.grupos.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.itemCount < 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.itemCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.produto)("disabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Adicionar ", ctx.itemCount, " ao pedido ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (ctx.itemCount * ctx.produto.preco + ctx.itemCount * ctx.extra.preco + ctx.optionPrice + ctx.extraPrice).toFixed(2), " \u20AC");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInput"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatRadioGroup"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckbox"]],
        styles: [".add-item-model-container[_ngcontent-%COMP%] {\n  min-height: 500px;\n  min-width: 1000px;\n}\n.add-item-model-container[_ngcontent-%COMP%]   .model-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.add-item-model-container[_ngcontent-%COMP%]   .model-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 350px;\n}\n.add-item-model-container[_ngcontent-%COMP%]   .model-body[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  background: #f6f6f6;\n}\n.add-item-model-container[_ngcontent-%COMP%]   .model-body[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  background: #f6f6f6;\n}\n.add-item-model-container[_ngcontent-%COMP%]   .model-footer[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 0px 20px;\n  margin-bottom: 20px;\n}\n.mat-select-arrow[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYWNjb3VudFxcYWRkcmVzc2VzXFxhZGQtaXRlbS1tb2RlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBRVI7QUFETztFQUNLLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUdaO0FBRE87RUFDSyxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBR1o7QUFBSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFDQTtFQUNJLDhCQUFBO0FBRUoiLCJmaWxlIjoiYWRkLWl0ZW0tbW9kZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWl0ZW0tbW9kZWwtY29udGFpbmVye1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIG1pbi13aWR0aDogMTAwMHB4O1xuICAgIC5tb2RlbC1oZWFkZXJ7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLm1vZGVsLWJvZHl7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICAgICAgIC5pbnN0cnVjdGlvbntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7ICAgICAgICAgICBcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDYsIDI0NiwgMjQ2KTtcbiAgICAgICB9XG4gICAgICAgLm9wdGlvbnN7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyOyAgICAgICAgICAgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyNDYsIDI0Nik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1vZGVsLWZvb3RlcntcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG4ubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/restaurant.service */
      "XXB/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_write_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/write.service */
      "RN/e");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_skltn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-skltn */
      "dWUj");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");

      function HomeComponent_ng_container_1_skltn_root_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "skltn-root", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rectRadius", 10);
        }
      }

      function HomeComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_container_1_skltn_root_2_Template, 7, 1, "skltn-root", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.loaderRestaurant);
        }
      }

      function HomeComponent_ng_container_2_ng_container_5_div_1_label_11_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_ng_container_2_ng_container_5_div_1_label_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_container_2_ng_container_5_div_1_label_11_span_2_Template, 2, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r9 = ctx.$implicit;
          var i_r10 = ctx.index;

          var restaurante_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r10 < restaurante_r6.tags.length - 1);
        }
      }

      function HomeComponent_ng_container_2_ng_container_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_container_2_ng_container_5_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var restaurante_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.goToRestaurant(restaurante_r6.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u2022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_ng_container_2_ng_container_5_div_1_label_11_Template, 3, 2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var restaurante_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../", restaurante_r6.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](restaurante_r6.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", restaurante_r6.tags);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](restaurante_r6.timing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", restaurante_r6.stars, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", restaurante_r6.totalReviews, " ");
        }
      }

      function HomeComponent_ng_container_2_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_2_ng_container_5_div_1_Template, 20, 6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var restaurante_r6 = ctx.$implicit;

          var tag_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.hasTag(restaurante_r6, tag_r4));
        }
      }

      function HomeComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_ng_container_2_ng_container_5_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var tag_r4 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.restaurantes);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(restaurantService, router, writeService) {
          _classCallCheck(this, HomeComponent);

          this.restaurantService = restaurantService;
          this.router = router;
          this.writeService = writeService;
          this.restaurantes = new Array();
          this.loaderRestaurant = new Array(3);
          this.tags = new Array();
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.restaurantService.getRestaurants().subscribe(function (res) {
              var _ref;

              _this9.restaurantes = res.reverse();
              _this9.tags = _toConsumableArray(new Set((_ref = []).concat.apply(_ref, _toConsumableArray(_this9.restaurantes.map(function (rest) {
                return rest.tags.map(function (tag) {
                  return tag.trim();
                });
              })))));

              _this9.restaurantService.setTags(_this9.tags);
            });
          }
        }, {
          key: "goToRestaurant",
          value: function goToRestaurant(id) {
            this.writeService.selectRestaurant(this.restaurantes.find(function (restaurant) {
              return restaurant.id === id;
            }));
            this.router.navigate(['restaurants/', id]);
          }
        }, {
          key: "hasTag",
          value: function hasTag(restaurante, tag) {
            for (var i = 0; i < restaurante.tags.length; i++) {
              if (restaurante.tags[i].trim() == tag) {
                return true;
              }
            }

            return false;
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_write_service__WEBPACK_IMPORTED_MODULE_3__["WriteService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 3,
        vars: 2,
        consts: [[1, "home-container"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "card-container"], ["class", "card", "duration", "1000", "flareWidth", "50%", "bgFill", "#d8d5d1", "flareFill", "rgba(255,255,255, 0.5)", 3, "rectRadius", 4, "ngFor", "ngForOf"], ["duration", "1000", "flareWidth", "50%", "bgFill", "#d8d5d1", "flareFill", "rgba(255,255,255, 0.5)", 1, "card", 3, "rectRadius"], [1, "skltn-card"], ["skltn-bone", "", "type", "circle", 1, "skltn-card__avatar"], [1, "skltn-card__body"], ["skltn-bone", "", 1, "skltn-card__title"], ["skltn-bone", "", 1, "skltn-card__line"], [2, "margin", "20px 0px 0px 10px"], [2, "font-size", "26px", "font-weight", "600"], ["class", "card", 3, "click", 4, "ngIf"], [1, "card", 3, "click"], [1, "img-box"], ["data-selected", "true", "data-label-id", "0", 1, "img-box", 3, "src"], [1, "details-box"], [2, "font-weight", "600"], [2, "margin-top", "5px"], ["src", ""], ["style", "margin: 0px 5px;", 4, "ngIf"], [2, "margin", "0px 5px"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_1_Template, 3, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_container_2_Template, 6, 2, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.restaurantes.length < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_skltn__WEBPACK_IMPORTED_MODULE_5__["SkltnComponent"], ngx_skltn__WEBPACK_IMPORTED_MODULE_5__["SkltnBoneDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChip"]],
        styles: [".home-container[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  background: #fff;\n  padding: 0px 70px;\n}\n\n.img-box[_ngcontent-%COMP%] {\n  border-radius: 40%;\n  width: 350px;\n  height: 240px;\n  transition: 100ms linear;\n}\n\n.img-box[_ngcontent-%COMP%]:hover {\n  transform: scale(1.04);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhY2NvdW50XFxhZGRyZXNzZXNcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMHB4IDcwcHg7XG59XG5cbi5pbWctYm94e1xuICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICB0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXI7IFxufVxuXG4uaW1nLWJveDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "C8Zf":
    /*!*******************************************************!*\
      !*** ./src/app/services/delay-interceptor.service.ts ***!
      \*******************************************************/

    /*! exports provided: DelayInterceptor */

    /***/
    function C8Zf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DelayInterceptor", function () {
        return DelayInterceptor;
      });
      /* harmony import */


      var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/internal/operators */
      "yrbL");
      /* harmony import */


      var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DelayInterceptor = /*#__PURE__*/function () {
        function DelayInterceptor() {
          _classCallCheck(this, DelayInterceptor);
        }

        _createClass(DelayInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            console.log(request);
            return next.handle(request).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["delay"])(500));
          }
        }]);

        return DelayInterceptor;
      }();

      DelayInterceptor.ɵfac = function DelayInterceptor_Factory(t) {
        return new (t || DelayInterceptor)();
      };

      DelayInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DelayInterceptor,
        factory: DelayInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "EFyh":
    /*!*******************************************!*\
      !*** ./src/app/services/login.service.ts ***!
      \*******************************************/

    /*! exports provided: LoginService */

    /***/
    function EFyh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(HttpClient) {
          _classCallCheck(this, LoginService);

          this.HttpClient = HttpClient;
        }

        _createClass(LoginService, [{
          key: "logIn",
          value: function logIn(user) {
            var token = localStorage.getItem("TOKEN");
            console.log(user);
            return this.HttpClient.post("http://localhost:3000/login", user, {
              headers: {
                'x-access-token': token ? token : ""
              }
            });
          }
        }, {
          key: "validateToken",
          value: function validateToken(token) {
            return this.HttpClient.post("http://localhost:3000/login", {}, {
              headers: {
                'x-access-token': token ? token : ""
              }
            });
          }
        }, {
          key: "signIn",
          value: function signIn(userInfo) {
            return this.HttpClient.post("http://localhost:3000/signin", userInfo);
          }
        }]);

        return LoginService;
      }();

      LoginService.ɵfac = function LoginService_Factory(t) {
        return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoginService,
        factory: LoginService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "F7Ve":
    /*!********************************************************!*\
      !*** ./src/app/account/payments/payments.component.ts ***!
      \********************************************************/

    /*! exports provided: PaymentsComponent */

    /***/
    function F7Ve(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function () {
        return PaymentsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PaymentsComponent = /*#__PURE__*/function () {
        function PaymentsComponent() {
          _classCallCheck(this, PaymentsComponent);
        }

        _createClass(PaymentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PaymentsComponent;
      }();

      PaymentsComponent.ɵfac = function PaymentsComponent_Factory(t) {
        return new (t || PaymentsComponent)();
      };

      PaymentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaymentsComponent,
        selectors: [["app-payments"]],
        decls: 8,
        vars: 0,
        consts: [[2, "margin-bottom", "20px"], ["width", "140", "height", "80", "alt", "", "src", "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_80/image-pay-by-cash_av6bcw", 1, "_2tuBw", "_12_oN"], [2, "margin-top", "30px", "display", "flex", "flex-direction", "column"], [2, "margin-top", "10px", "font-weight", "500", "opacity", ".5"]],
        template: function PaymentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "M\xE9todos de Pagamento");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pagar \xE0 entrega");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Para j\xE1 s\xF3 \xE9 aceite o pagamento a quando a entrega.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "GAEs":
    /*!******************************************************************!*\
      !*** ./src/app/single-restaurant/single-restaurant.component.ts ***!
      \******************************************************************/

    /*! exports provided: SingleRestaurantComponent */

    /***/
    function GAEs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleRestaurantComponent", function () {
        return SingleRestaurantComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/restaurant.service */
      "XXB/");
      /* harmony import */


      var _services_read_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/read.service */
      "SYVY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SingleRestaurantComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r2.trim());
        }
      }

      var _c0 = function _c0(a0, a1, a2) {
        return [a0, a1, a2];
      };

      function SingleRestaurantComponent_a_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r3.nome)("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, item_r3.produtos, item_r3.foto, item_r3.grupos))("active", _r4.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.nome, " ");
        }
      }

      var SingleRestaurantComponent = /*#__PURE__*/function () {
        function SingleRestaurantComponent(dialog, restaurantService, readService, activatedRoute, router) {
          var _this10 = this;

          _classCallCheck(this, SingleRestaurantComponent);

          this.dialog = dialog;
          this.restaurantService = restaurantService;
          this.readService = readService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.cart = Array();
          this.loader = Array(8);
          this.activatedRoute.params.subscribe(function (val) {
            _this10.restId = val.id;
          });
        }

        _createClass(SingleRestaurantComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.readService.getSelectedRestaurant().subscribe(function (data) {
              _this11.restaurant = data;

              if (Object.keys(data).length === 0) {
                _this11.restaurantService.getRestaurant(_this11.restId).subscribe(function (restaurant) {
                  _this11.restaurant = restaurant;
                  _this11.morada = "".concat(_this11.restaurant.morada.rua);
                  _this11.background = "background:url(".concat(_this11.restaurant.cdn).concat(_this11.restaurant.desktop_widget, ");   \n          background-size: 100%;\n          background-repeat: no-repeat;");
                });
              } else {
                _this11.morada = "".concat(_this11.restaurant.morada.rua);
                _this11.background = "background:url(".concat(_this11.restaurant.cdn).concat(_this11.restaurant.desktop_widget, ");   \n        background-size: 100%;\n        background-repeat: no-repeat;");
              }
            });
            this.restaurantService.getMeals(this.restId).subscribe(function (data) {
              _this11.categorias = data;
              console.log(data);

              if (_this11.categorias[0].grupos.length > 0) {
                localStorage.setItem("Grupos", JSON.stringify(_this11.categorias[0].grupos));
              }

              localStorage.setItem("foto", _this11.categorias[0].foto);
              localStorage.setItem("Categoria", JSON.stringify(_this11.categorias[0].produtos));

              _this11.router.navigate([_this11.categorias[0].nome], {
                relativeTo: _this11.activatedRoute
              });
            });
          }
        }]);

        return SingleRestaurantComponent;
      }();

      SingleRestaurantComponent.ɵfac = function SingleRestaurantComponent_Factory(t) {
        return new (t || SingleRestaurantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_read_service__WEBPACK_IMPORTED_MODULE_3__["ReadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      SingleRestaurantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SingleRestaurantComponent,
        selectors: [["app-single-restaurant"]],
        decls: 28,
        vars: 10,
        consts: [[1, "single-restaurant-container"], [1, "restaurant-header-box"], [1, "details-box"], [1, "contain"], [2, "font-weight", "600"], [2, "margin-top", "15px"], [4, "ngFor", "ngForOf"], [1, "restaurant-info"], ["src", "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/972e1cb487b3a5c72c30a6635596f477.svg"], [1, "img-box"], ["width", "100%", "height", "380px", 3, "src"], [1, "menu-header"], ["mat-tab-nav-bar", "", "mat-align-tabs", "center", 1, "tab-group"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "state", "active", 4, "ngFor", "ngForOf"], [1, "menu-body"], [2, "margin", "0px 5px"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "state", "active"], ["rla", "routerLinkActive"]],
        template: function SingleRestaurantComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u20AC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SingleRestaurantComponent_div_9_Template, 5, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nav", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SingleRestaurantComponent_a_25_Template, 3, 8, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.background);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.restaurant.nome);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.restaurant.tags);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.restaurant.timing);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.restaurant.rating, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.restaurant.totalReviews, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.morada);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../", ctx.restaurant.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorias);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipList"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChip"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabNav"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]],
        styles: [".single-restaurant-container[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  background: #fff;\n}\n.single-restaurant-container[_ngcontent-%COMP%]   .restaurant-header-box[_ngcontent-%COMP%] {\n  height: 380px;\n  display: flex;\n  align-items: center;\n}\n.single-restaurant-container[_ngcontent-%COMP%]   .restaurant-header-box[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%] {\n  flex: 2;\n  height: 300px;\n}\n.single-restaurant-container[_ngcontent-%COMP%]   .restaurant-header-box[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .contain[_ngcontent-%COMP%] {\n  border-radius: 10%;\n  box-shadow: 5px 5px 5px #888888;\n  padding: 20px 20px 20px 75px;\n  margin-left: 75px;\n  margin-right: 65%;\n  background: #fff;\n}\n.single-restaurant-container[_ngcontent-%COMP%]   .restaurant-header-box[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .contain[_ngcontent-%COMP%]   .restaurant-info[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.single-restaurant-container[_ngcontent-%COMP%]   .restaurant-header-box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  background: #fff;\n  flex: 0.5;\n  height: 100%;\n}\n.menu-header[_ngcontent-%COMP%] {\n  padding: 0px 75px;\n  height: 80px;\n  position: sticky;\n  z-index: 2;\n  top: 0px;\n  background: #fff;\n  box-shadow: 0 15px 40px -20px rgba(40, 44, 63, 0.15);\n}\n.menu-header[_ngcontent-%COMP%]   .tab-group[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.menu-header[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #fff;\n  margin-right: 40px;\n  height: 78px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.menu-header[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid lightslategrey;\n}\n.menu-header[_ngcontent-%COMP%]   .mat-tab-group.mat-primary[_ngcontent-%COMP%]    > .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: yellow;\n  height: 10px;\n}\n.menu-body[_ngcontent-%COMP%] {\n  padding: 0px 75px;\n  margin: 20px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhY2NvdW50XFxhZGRyZXNzZXNcXHNpbmdsZS1yZXN0YXVyYW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFBUTtFQUNJLE9BQUE7RUFDQSxhQUFBO0FBRVo7QUFEWTtFQUNJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUdoQjtBQUZnQjtFQUNJLGdCQUFBO0FBSXBCO0FBQVE7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBRVo7QUFFQTtFQUVJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLG9EQUFBO0FBQUo7QUFFSTtFQUNJLGVBQUE7QUFBUjtBQUVJO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQVI7QUFHSTtFQUNJLHVDQUFBO0FBRFI7QUFNSTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtBQUpSO0FBUUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBTEoiLCJmaWxlIjoic2luZ2xlLXJlc3RhdXJhbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2xlLXJlc3RhdXJhbnQtY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAucmVzdGF1cmFudC1oZWFkZXItYm94e1xuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgIFxuICAgICAgICAuZGV0YWlscy1ib3gge1xuICAgICAgICAgICAgZmxleDogMjtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAuY29udGFpbntcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggIzg4ODg4ODtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA3NXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNjUlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgLnJlc3RhdXJhbnQtaW5mb3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmltZy1ib3h7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgZmxleDogMC41O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuLm1lbnUtaGVhZGVye1xuICAgXG4gICAgcGFkZGluZzogMHB4IDc1cHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgei1pbmRleDogMjtcbiAgICB0b3A6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IC0yMHB4IHJnYmEoNDAsNDQsNjMsLjE1KTtcblxuICAgIC50YWItZ3JvdXB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gICAgLml0ZW17XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7ICAgICAgIFxuICAgICAgICBoZWlnaHQ6IDc4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIFxuICAgIH1cbiAgICAuaXRlbTpob3ZlcntcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0c2xhdGVncmV5O1xuICAgIH1cblxuICAgICAgXG5cbiAgICAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSA+IC5tYXQtaW5rLWJhcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgfSAgXG4gICAgXG59XG4ubWVudS1ib2R5e1xuICAgIHBhZGRpbmc6IDBweCA3NXB4O1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "GIMH":
    /*!****************************************************!*\
      !*** ./src/app/account/orders/orders.component.ts ***!
      \****************************************************/

    /*! exports provided: OrdersComponent */

    /***/
    function GIMH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
        return OrdersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/orders.service */
      "MOE4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_skltn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-skltn */
      "dWUj");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");

      function OrdersComponent_ng_container_2_skltn_root_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "skltn-root", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rectRadius", 10);
        }
      }

      function OrdersComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrdersComponent_ng_container_2_skltn_root_1_Template, 7, 1, "skltn-root", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.loader);
        }
      }

      function OrdersComponent_div_3_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var meal_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r6.quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r6.name);
        }
      }

      function OrdersComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrdersComponent_div_3_li_10_Template, 6, 2, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Reorder ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", order_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", order_r4.meals.length, " items for \u20B9 ", order_r4.totalPrice, " \u2022 ", order_r4.time, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", order_r4.meals);
        }
      }

      var OrdersComponent = /*#__PURE__*/function () {
        function OrdersComponent(orderService) {
          _classCallCheck(this, OrdersComponent);

          this.orderService = orderService;
          this.loader = new Array(2);
          this.orders = new Array();
        }

        _createClass(OrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.orderService.getAllOrders().subscribe(function (res) {
              _this12.orders = res;
            });
          }
        }]);

        return OrdersComponent;
      }();

      OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
        return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]));
      };

      OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrdersComponent,
        selectors: [["app-orders"]],
        decls: 4,
        vars: 2,
        consts: [[4, "ngIf"], ["class", "order-box", 4, "ngFor", "ngForOf"], ["class", "card", "duration", "1000", "flareWidth", "50%", "bgFill", "#d8d5d1", "flareFill", "rgba(255,255,255, 0.5)", 3, "rectRadius", 4, "ngFor", "ngForOf"], ["duration", "1000", "flareWidth", "50%", "bgFill", "#d8d5d1", "flareFill", "rgba(255,255,255, 0.5)", 1, "card", 3, "rectRadius"], [1, "skltn-card"], ["skltn-bone", "", "type", "circle", 1, "skltn-card__avatar"], [1, "skltn-card__body"], ["skltn-bone", "", 1, "skltn-card__title"], ["skltn-bone", "", 1, "skltn-card__line"], [1, "order-box"], [1, "img-box"], ["width", "250", "height", "120", 3, "src"], [1, "detail-box"], [2, "margin-bottom", "5px"], [2, "font-size", "18px", "font-weight", "600"], [2, "margin-top", "15px"], ["style", "margin-bottom: 10px;", "class", "flex-item-center", 4, "ngFor", "ngForOf"], [2, "flex", "1", "margin-left", "40px"], ["mat-raised-button", "", 1, "full-width", "full-height", "success-background", 2, "height", "45px"], [1, "flex-item-center", 2, "margin-bottom", "10px"], [1, "border-box"], [1, "very-small-gap"]],
        template: function OrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pedidos Anteriores");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrdersComponent_ng_container_2_Template, 2, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrdersComponent_div_3_Template, 14, 6, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_skltn__WEBPACK_IMPORTED_MODULE_3__["SkltnComponent"], ngx_skltn__WEBPACK_IMPORTED_MODULE_3__["SkltnBoneDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: [".order-box[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid lightgray;\n  padding: 20px 0px;\n}\n.order-box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.order-box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   .border-box[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  width: 20px;\n  text-align: center;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhZGRyZXNzZXNcXG9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLGlCQUFBO0FBRVI7QUFEUTtFQUNJLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUdaIiwiZmlsZSI6Im9yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlci1ib3h7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICAgIC5kZXRhaWwtYm94e1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgLmJvcmRlci1ib3gge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "HMK8":
    /*!*******************************************!*\
      !*** ./src/app/actions/account.action.ts ***!
      \*******************************************/

    /*! exports provided: ADD_ACCOUNT, STORAGE_KEYS, AddAccount */

    /***/
    function HMK8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ADD_ACCOUNT", function () {
        return ADD_ACCOUNT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STORAGE_KEYS", function () {
        return STORAGE_KEYS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddAccount", function () {
        return AddAccount;
      });

      var ADD_ACCOUNT = "[ACCOUNT] Add";
      var STORAGE_KEYS = {
        account: "ACCOUNT",
        token: "TOKEN"
      };

      var AddAccount = function AddAccount(payload) {
        _classCallCheck(this, AddAccount);

        this.payload = payload;
        this.type = ADD_ACCOUNT;
      };
      /***/

    },

    /***/
    "IiZn":
    /*!************************************************!*\
      !*** ./src/app/checkout/checkout.component.ts ***!
      \************************************************/

    /*! exports provided: CheckoutComponent */

    /***/
    function IiZn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
        return CheckoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_write_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/write.service */
      "RN/e");
      /* harmony import */


      var _services_read_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/read.service */
      "SYVY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _account_addresses_addresses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../account/addresses/addresses.component */
      "pnB3");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "IRfi");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "j14s");

      var _c0 = function _c0() {
        return ["/login"];
      };

      var _c1 = function _c1() {
        return ["/signup"];
      };

      function CheckoutComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Conta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Para efetuar o seu pedido, fa\xE7a Login na sua conta ou registe-se j\xE1!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " LOG IN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Registrar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      }

      function CheckoutComponent_div_4_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Escolha onde quer ser entregue ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CheckoutComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Endere\xE7o de entrega");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckoutComponent_div_4_span_4_Template, 2, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-addresses", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("conta", function CheckoutComponent_div_4_Template_app_addresses_conta_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.conta;
          })("fullComponent", function CheckoutComponent_div_4_Template_app_addresses_fullComponent_6_listener() {
            return false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.conta.moradas == null ? null : ctx_r1.conta.moradas.length) > 1);
        }
      }

      function CheckoutComponent_li_57_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var quantityValue_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", quantityValue_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", quantityValue_r10, " ");
        }
      }

      function CheckoutComponent_li_57_div_9_mat_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", item_r7.extras[3].length, " complemento(s)");
        }
      }

      function CheckoutComponent_li_57_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckoutComponent_li_57_div_9_mat_label_3_Template, 2, 1, "mat-label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.extras[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.extras[3].length > 0);
        }
      }

      function CheckoutComponent_li_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CheckoutComponent_li_57_Template_mat_select_selectionChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var item_r7 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.addToCart($event, item_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckoutComponent_li_57_mat_option_4_Template, 2, 2, "mat-option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CheckoutComponent_li_57_div_9_Template, 4, 2, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_li_57_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var item_r7 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.removeFromCart(item_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Retirar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r7.quantidade);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.quantityList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.extras[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.calcularItem(item_r7).toFixed(2), " \u20AC");
        }
      }

      var CheckoutComponent = /*#__PURE__*/function () {
        function CheckoutComponent(router, writeService, readService) {
          _classCallCheck(this, CheckoutComponent);

          this.router = router;
          this.writeService = writeService;
          this.readService = readService;
          this.quantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          this.conta = null;
        }

        _createClass(CheckoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.readService.getAccount().subscribe(function (data) {
              if (data.access) {
                _this13.conta = data.account;
              }
            });
            this.readService.getCart().subscribe(function (data) {
              _this13.cart = data;
            });
          }
        }, {
          key: "addToCart",
          value: function addToCart(event, item) {
            var newItem = Object.assign({}, item);
            newItem.quantidade = event.value;
            this.writeService.updateItem(newItem);
          }
        }, {
          key: "removeFromCart",
          value: function removeFromCart(item) {
            var newItem = Object.assign({}, item);
            newItem.quantidade = 0;
            this.writeService.updateItem(newItem);
          }
        }, {
          key: "calculateTotalPriceOfCart",
          value: function calculateTotalPriceOfCart() {
            var total = 0;
            this.cart.orders.forEach(function (element) {
              total += element.preco + element.extras[1] * element.quantidade;

              if (element.extras[3].length > 0) {
                element.extras[3].forEach(function (extra) {
                  total += extra.preco;
                });
              }
            });
            return total;
          }
        }, {
          key: "calcularItem",
          value: function calcularItem(item) {
            var total = (item.preco + item.extras[1]) * item.quantidade;

            if (item.extras[3].length > 0) {
              item.extras[3].forEach(function (extra) {
                total += extra.preco;
              });
            }

            return total;
          }
        }, {
          key: "openLoginSideNav",
          value: function openLoginSideNav() {// this.helperService.loginSideNav.next(true);
          }
        }]);

        return CheckoutComponent;
      }();

      CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
        return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_write_service__WEBPACK_IMPORTED_MODULE_2__["WriteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_read_service__WEBPACK_IMPORTED_MODULE_3__["ReadService"]));
      };

      CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CheckoutComponent,
        selectors: [["app-checkout"]],
        decls: 65,
        vars: 5,
        consts: [[1, "cart-container"], [1, "cart-container-box"], [1, "left-container-box"], ["class", "child-box", 4, "ngIf"], [1, "child-box"], [1, "second-view"], [1, "body", 2, "padding", "0"], [1, "list-view"], [1, "list-box"], [1, "item"], ["fontSet", "material-icons-outlined", 1, "icon"], [1, "text", 2, "margin-left", "10px"], [1, "item", "active_item"], [1, "result-view"], [1, "result-box"], ["width", "140", "height", "80", "alt", "", "src", "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_80/image-pay-by-cash_av6bcw", 1, "_2tuBw", "_12_oN"], [2, "margin-top", "30px", "display", "flex", "flex-direction", "column"], [2, "font-weight", "400"], [2, "margin-top", "10px", "font-weight", "500", "opacity", ".5"], [1, "button-box", "full-size-button-box"], ["mat-raised-button", "", 1, "default-button", "success-background", 2, "margin-top", "20px"], [1, "right-container-box"], [1, "main-box", "cart-card", 2, "padding", "0"], [1, "cart-card-header", "flex-with-space-between", "padding-horizontaly"], [1, "flex-item-center"], ["fontSet", "material-icons-outlined"], [1, "very-small-gap"], [1, "cart-card-body"], ["class", "flex-with-space-between padding", 4, "ngFor", "ngForOf"], [1, "cart-card-footer", "padding"], ["mat-raised-button", "", 1, "full-width", "full-height", "success-background"], [1, "flex-with-space-between"], [1, "button-container"], [1, "button-box"], ["mat-raised-button", "", 1, "default-button", "success-background", 2, "width", "150px", 3, "routerLink"], [1, "button-box", 2, "margin-left", "20px"], ["mat-raised-button", "", 1, "default-button", "success-outline", 2, "width", "150px", 3, "routerLink"], [4, "ngIf"], [1, "address-box-container"], [3, "conta", "fullComponent"], [1, "flex-with-space-between", "padding"], ["color", "dark", 2, "width", "30px", "background", "transparent"], [2, "text-align", "center !important", 3, "ngModel", "selectionChange"], ["style", "margin-left: 5px !important;", 3, "value", 4, "ngFor", "ngForOf"], [1, "small-gap"], [1, "flex-column"], ["class", "flex-column label-small", 4, "ngIf"], [1, "accent", 2, "margin-top", "5px", 3, "click"], [2, "margin-left", "5px !important", 3, "value"], [1, "flex-column", "label-small"]],
        template: function CheckoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckoutComponent_div_3_Template, 13, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckoutComponent_div_4_Template, 7, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "M\xE9todo de pagamento");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " account_balance_wallet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Wallets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " credit_card ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Credit/Debit Cards ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " money ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Pagar \xE1 entrega");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " credit_card ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "UPI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Pagar \xE1 entrega");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Os nossos entregadores nao disp\xF5em de troco, tente ter o valor exato");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u20AC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "shopping_cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, CheckoutComponent_li_57_Template, 14, 5, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Pagar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conta == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conta != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("O Seu pedido (", ctx.cart.orders.length, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cart.orders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.calculateTotalPriceOfCart(), " \u20AC ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _account_addresses_addresses_component__WEBPACK_IMPORTED_MODULE_6__["AddressesComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"]],
        styles: [".cart-container[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  width: 100%;\n  background: #e9ecee;\n  padding-top: 20px;\n}\n\n.cart-container-box[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  display: flex;\n  margin-top: 30px;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .left-container-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .left-container-box[_ngcontent-%COMP%]   .child-box[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 20px;\n  padding: 40px;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .left-container-box[_ngcontent-%COMP%]   .child-box[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 40px;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .left-container-box[_ngcontent-%COMP%]   .child-box[_ngcontent-%COMP%]   .address-box-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 40px 0px 0px 0px;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .left-container-box[_ngcontent-%COMP%]   .child-box[_ngcontent-%COMP%]   .address-box-container[_ngcontent-%COMP%]   .address-box-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 20px;\n  border: 1px solid lightgray;\n  width: 280px;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .left-container-box[_ngcontent-%COMP%]   .child-box[_ngcontent-%COMP%]   .address-box-container[_ngcontent-%COMP%]   .address-box-card[_ngcontent-%COMP%]   .address-box-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .left-container-box[_ngcontent-%COMP%]   .child-box[_ngcontent-%COMP%]   .address-box-container[_ngcontent-%COMP%]   .address-box-card[_ngcontent-%COMP%]   .address-box-footer[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: black;\n  line-height: 1.3;\n  padding-top: 5px;\n  margin-left: 34px;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .left-container-box[_ngcontent-%COMP%]   .child-box[_ngcontent-%COMP%]   .address-box-container[_ngcontent-%COMP%]   .address-box-card[_ngcontent-%COMP%]:nth-child(even) {\n  margin-left: 20px;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .right-container-box[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .right-container-box[_ngcontent-%COMP%]   .main-box[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 111px;\n  background: #fff;\n  padding: 30px;\n  margin-left: 30px;\n  flex: 1;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .right-container-box[_ngcontent-%COMP%]   .main-box[_ngcontent-%COMP%]   .cart-header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .right-container-box[_ngcontent-%COMP%]   .main-box[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  border-top: 1px solid #f2f2f2;\n  width: 100%;\n  margin-top: 10px;\n  padding-top: 20px;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .right-container-box[_ngcontent-%COMP%]   .main-box[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .right-container-box[_ngcontent-%COMP%]   .main-box[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .right-container-box[_ngcontent-%COMP%]   .main-box[_ngcontent-%COMP%]   .subtotal[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  border-top: 1px solid #f2f2f2;\n  color: black;\n  font-size: 15px;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .right-container-box[_ngcontent-%COMP%]   .main-box[_ngcontent-%COMP%]   .subtotal[_ngcontent-%COMP%]   .total-amount-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.cart-container-box[_ngcontent-%COMP%]   .right-container-box[_ngcontent-%COMP%]   .main-box[_ngcontent-%COMP%]   .subtotal[_ngcontent-%COMP%]   .extra-charges-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: black;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhY2NvdW50XFxhZGRyZXNzZXNcXGNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQURKOztBQUVJO0VBRUksYUFBQTtFQUNBLHNCQUFBO0FBRFI7O0FBRVE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUFaOztBQUNZO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBQ2hCOztBQUNZO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDRSx3QkFBQTtBQUNoQjs7QUFDZ0I7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFDcEI7O0FBQW9CO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRXhCOztBQUFvQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRXhCOztBQUNnQjtFQUNJLGlCQUFBO0FBQ3BCOztBQUtJO0VBRUksWUFBQTtBQUpSOztBQUtRO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0FBSFo7O0FBSVk7RUFDSSxhQUFBO0FBRmhCOztBQUtZO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUhoQjs7QUFJZ0I7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRnBCOztBQUdvQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRHhCOztBQUtZO0VBQ0ksaUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSGhCOztBQUtnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSHBCOztBQUtnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUhwQiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcnQtY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6ODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZTllY2VlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG5cbi5jYXJ0LWNvbnRhaW5lci1ib3h7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAubGVmdC1jb250YWluZXItYm94e1xuICAgICAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLmNoaWxkLWJveHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgIC5idXR0b24tY29udGFpbmVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGRyZXNzLWJveC1jb250YWluZXJ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDQwcHggMHB4IDBweCAwcHg7XG5cbiAgICAgICAgICAgICAgICAuYWRkcmVzcy1ib3gtY2FyZHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5hZGRyZXNzLWJveC1oZWFkZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYWRkcmVzcy1ib3gtZm9vdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWRkcmVzcy1ib3gtY2FyZDpudGgtY2hpbGQoZXZlbikgeyBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cbiAgICAucmlnaHQtY29udGFpbmVyLWJveHtcbiAgICAgICAgXG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgLm1haW4tYm94e1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHRvcDogMTExcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIC5jYXJ0LWhlYWRlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5pdGVtc3tcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YyZjJmMjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIC5saXN0e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIC5pdGVtLW5hbWV7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdWJ0b3RhbHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YyZjJmMjtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnRvdGFsLWFtb3VudC1ib3h7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmV4dHJhLWNoYXJnZXMtdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4OztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "MOE4":
    /*!********************************************!*\
      !*** ./src/app/services/orders.service.ts ***!
      \********************************************/

    /*! exports provided: OrdersService */

    /***/
    function MOE4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersService", function () {
        return OrdersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var OrdersService = /*#__PURE__*/function () {
        function OrdersService(httpClient) {
          _classCallCheck(this, OrdersService);

          this.httpClient = httpClient;
          this.api = "http://localhost:3000";
        }

        _createClass(OrdersService, [{
          key: "getAllOrders",
          value: function getAllOrders() {
            return this.httpClient.get(this.api + "/orders");
          }
        }]);

        return OrdersService;
      }();

      OrdersService.ɵfac = function OrdersService_Factory(t) {
        return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      OrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OrdersService,
        factory: OrdersService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "PrkK":
    /*!************************************************************!*\
      !*** ./src/app/account/favourites/favourites.component.ts ***!
      \************************************************************/

    /*! exports provided: FavouritesComponent */

    /***/
    function PrkK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function () {
        return FavouritesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/restaurant.service */
      "XXB/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_skltn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-skltn */
      "dWUj");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");

      function FavouritesComponent_ng_container_2_skltn_root_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "skltn-root", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rectRadius", 10);
        }
      }

      function FavouritesComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavouritesComponent_ng_container_2_skltn_root_2_Template, 7, 1, "skltn-root", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.loader);
        }
      }

      function FavouritesComponent_div_3_div_1_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var restaurant_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", restaurant_r5.area, " ");
        }
      }

      function FavouritesComponent_div_3_div_1_label_12_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FavouritesComponent_div_3_div_1_label_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavouritesComponent_div_3_div_1_label_12_span_2_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r9 = ctx.$implicit;
          var i_r10 = ctx.index;

          var restaurant_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r10 < restaurant_r5.foodType.length - 1);
        }
      }

      function FavouritesComponent_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FavouritesComponent_div_3_div_1_span_7_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u20B9\u20B9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u2022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FavouritesComponent_div_3_div_1_label_12_Template, 3, 2, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-chip-list", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " (500+) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var restaurant_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", restaurant_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", restaurant_r5.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", restaurant_r5.area);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", restaurant_r5.foodType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](restaurant_r5.timing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", restaurant_r5.ratingPoints, " ");
        }
      }

      function FavouritesComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavouritesComponent_div_3_div_1_Template, 21, 6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.restaurants[0].list);
        }
      }

      var FavouritesComponent = /*#__PURE__*/function () {
        function FavouritesComponent(router, restaurantService) {
          _classCallCheck(this, FavouritesComponent);

          this.router = router;
          this.restaurantService = restaurantService;
          this.loader = new Array(2);
          this.restaurants = new Array();
          this.loaderRestaurant = new Array(8);
        }

        _createClass(FavouritesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.restaurantService.getRestaurants().subscribe(function (res) {
              _this14.restaurants = res;
            });
          }
        }]);

        return FavouritesComponent;
      }();

      FavouritesComponent.ɵfac = function FavouritesComponent_Factory(t) {
        return new (t || FavouritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"]));
      };

      FavouritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FavouritesComponent,
        selectors: [["app-favourites"]],
        decls: 4,
        vars: 2,
        consts: [[4, "ngIf"], ["class", "card-container", 4, "ngIf"], [1, "card-container"], ["class", "card", "duration", "1000", "flareWidth", "50%", "bgFill", "#d8d5d1", "flareFill", "rgba(255,255,255, 0.5)", 3, "rectRadius", 4, "ngFor", "ngForOf"], ["duration", "1000", "flareWidth", "50%", "bgFill", "#d8d5d1", "flareFill", "rgba(255,255,255, 0.5)", 1, "card", 3, "rectRadius"], [1, "skltn-card"], ["skltn-bone", "", "type", "circle", 1, "skltn-card__avatar"], [1, "skltn-card__body"], ["skltn-bone", "", 1, "skltn-card__title"], ["skltn-bone", "", 1, "skltn-card__line"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "img-box"], ["width", "350px", "height", "240px", "data-selected", "true", "data-label-id", "0", 3, "src"], [1, "details-box"], [2, "font-weight", "600"], [2, "margin-top", "5px"], [4, "ngFor", "ngForOf"], ["aria-label", "Fish selection"], ["src", "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/972e1cb487b3a5c72c30a6635596f477.svg"], ["style", "margin: 0px 5px;", 4, "ngIf"], [2, "margin", "0px 5px"]],
        template: function FavouritesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Favoritos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavouritesComponent_ng_container_2_Template, 3, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FavouritesComponent_div_3_Template, 2, 1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.restaurants.length < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.restaurants.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_skltn__WEBPACK_IMPORTED_MODULE_4__["SkltnComponent"], ngx_skltn__WEBPACK_IMPORTED_MODULE_4__["SkltnBoneDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChip"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvdXJpdGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "RN/e":
    /*!*******************************************!*\
      !*** ./src/app/services/write.service.ts ***!
      \*******************************************/

    /*! exports provided: WriteService */

    /***/
    function RNE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WriteService", function () {
        return WriteService;
      });
      /* harmony import */


      var _actions_account_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../actions/account.action */
      "HMK8");
      /* harmony import */


      var _actions_restaurant_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../actions/restaurant.action */
      "vGd0");
      /* harmony import */


      var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../actions/cart.actions */
      "lo8X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var WriteService = /*#__PURE__*/function () {
        function WriteService(store) {
          _classCallCheck(this, WriteService);

          this.store = store;
        }

        _createClass(WriteService, [{
          key: "addAccount",
          value: function addAccount(account) {
            this.store.dispatch(new _actions_account_action__WEBPACK_IMPORTED_MODULE_0__["AddAccount"](account));
          }
        }, {
          key: "selectRestaurant",
          value: function selectRestaurant(restaurant) {
            this.store.dispatch(new _actions_restaurant_action__WEBPACK_IMPORTED_MODULE_1__["SelectRestaurant"](restaurant));
          }
        }, {
          key: "saveCart",
          value: function saveCart(cart) {
            this.store.dispatch(new _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["SaveCart"](cart));
          }
        }, {
          key: "addItem",
          value: function addItem(cart, item) {
            this.store.dispatch(new _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["AddOrder"](cart, item));
          }
        }, {
          key: "updateItem",
          value: function updateItem(newItem) {
            this.store.dispatch(new _actions_cart_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateOrder"](newItem));
          }
        }]);

        return WriteService;
      }();

      WriteService.ɵfac = function WriteService_Factory(t) {
        return new (t || WriteService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
      };

      WriteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: WriteService,
        factory: WriteService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "SYVY":
    /*!******************************************!*\
      !*** ./src/app/services/read.service.ts ***!
      \******************************************/

    /*! exports provided: ReadService */

    /***/
    function SYVY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReadService", function () {
        return ReadService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var ReadService = /*#__PURE__*/function () {
        function ReadService(store) {
          _classCallCheck(this, ReadService);

          this.store = store;
        }

        _createClass(ReadService, [{
          key: "getAccount",
          value: function getAccount() {
            return this.store.select('account');
          }
        }, {
          key: "getSelectedRestaurant",
          value: function getSelectedRestaurant() {
            return this.store.select('selectedRestaurant');
          }
        }, {
          key: "extractToken",
          value: function extractToken(data) {
            return data.account.token ? data.account.token : "";
          }
        }, {
          key: "getCart",
          value: function getCart() {
            return this.store.select('cart');
          }
        }]);

        return ReadService;
      }();

      ReadService.ɵfac = function ReadService_Factory(t) {
        return new (t || ReadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
      };

      ReadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ReadService,
        factory: ReadService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/header/header.component */
      "320Y");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/footer/footer.component */
      "jQpT");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Pede Agora';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        consts: [[1, "main"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
          }
        },
        directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: [".main[_ngcontent-%COMP%] {\n  min-height: calc(100vh - (60px + 215px));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRcXGFkZHJlc3Nlc1xcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDYwcHggKyAyMTVweCkpO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "XXB/":
    /*!************************************************!*\
      !*** ./src/app/services/restaurant.service.ts ***!
      \************************************************/

    /*! exports provided: RestaurantService */

    /***/
    function XXB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestaurantService", function () {
        return RestaurantService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RestaurantService = /*#__PURE__*/function () {
        function RestaurantService(httpClient) {
          _classCallCheck(this, RestaurantService);

          this.httpClient = httpClient;
          this.api = "http://localhost:3000";
        }

        _createClass(RestaurantService, [{
          key: "getRestaurants",
          value: function getRestaurants() {
            return this.httpClient.get(this.api + "/restaurantes");
          }
        }, {
          key: "getRestaurant",
          value: function getRestaurant(id) {
            return this.httpClient.get(this.api + "/restaurantes/" + id);
          }
        }, {
          key: "getMeals",
          value: function getMeals(id) {
            return this.httpClient.get(this.api + "/restaurantes/" + id + "/meals/");
          }
        }, {
          key: "setTags",
          value: function setTags(tags) {
            this.tags = tags;
          }
        }, {
          key: "getTags",
          value: function getTags() {
            return this.tags;
          }
        }, {
          key: "getRecommendsItems",
          value: function getRecommendsItems() {
            return this.httpClient.get(this.api + "/meals");
          }
        }]);

        return RestaurantService;
      }();

      RestaurantService.ɵfac = function RestaurantService_Factory(t) {
        return new (t || RestaurantService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      RestaurantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RestaurantService,
        factory: RestaurantService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var ngx_skltn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-skltn */
      "dWUj");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _material_extended_mde__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @material-extended/mde */
      "+9r9");
      /* harmony import */


      var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/header/header.component */
      "320Y");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/footer/footer.component */
      "jQpT");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/login/login.component */
      "aI8T");
      /* harmony import */


      var _shared_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./shared/signup/signup.component */
      "34WV");
      /* harmony import */


      var _single_restaurant_single_restaurant_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./single-restaurant/single-restaurant.component */
      "GAEs");
      /* harmony import */


      var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./checkout/checkout.component */
      "IiZn");
      /* harmony import */


      var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-material-timepicker */
      "r3oX");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_sheduled_deliver_model_sheduled_deliver_model_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./shared/sheduled-deliver-model/sheduled-deliver-model.component */
      "4HnF");
      /* harmony import */


      var _account_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./account/favourites/favourites.component */
      "PrkK");
      /* harmony import */


      var _account_orders_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./account/orders/orders.component */
      "GIMH");
      /* harmony import */


      var _account_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./account/my-account/my-account.component */
      "i6Sy");
      /* harmony import */


      var _account_payments_payments_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./account/payments/payments.component */
      "F7Ve");
      /* harmony import */


      var _account_addresses_addresses_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./account/addresses/addresses.component */
      "pnB3");
      /* harmony import */


      var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-page-scroll-core */
      "Zgu1");
      /* harmony import */


      var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ngx-page-scroll */
      "n3og");
      /* harmony import */


      var _single_restaurant_add_item_model_add_item_model_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./single-restaurant/add-item-model/add-item-model.component */
      "6LmY");
      /* harmony import */


      var _services_delay_interceptor_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./services/delay-interceptor.service */
      "C8Zf");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _reducers_account_reducer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./reducers/account.reducer */
      "kwqi");
      /* harmony import */


      var _reducers_selectedRestaurant_reducer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./reducers/selectedRestaurant.reducer */
      "nq2s");
      /* harmony import */


      var _single_restaurant_meal_meal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./single-restaurant/meal/meal.component */
      "b414");
      /* harmony import */


      var _reducers_cart_reducer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./reducers/cart.reducer */
      "2daZ");
      /* harmony import */


      var _account_change_info_component_change_info_component_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./account/change-info-component/change-info-component.component */
      "qQsv");
      /* harmony import */


      var _account_addresses_new_address_new_address_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./account/addresses/new-address/new-address.component */
      "1UMf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var skltnConfig = {
        rectRadius: 10,
        flareWidth: '150px',
        bgFill: '#d8d5d1',
        flareFill: 'rgba(255,255,255, 0.5)'
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
          useClass: _services_delay_interceptor_service__WEBPACK_IMPORTED_MODULE_26__["DelayInterceptor"],
          multi: true
        }],
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_27__["StoreModule"].forRoot({
          account: _reducers_account_reducer__WEBPACK_IMPORTED_MODULE_28__["reducerAccount"],
          selectedRestaurant: _reducers_selectedRestaurant_reducer__WEBPACK_IMPORTED_MODULE_29__["reducerSelectedRestaurant"],
          cart: _reducers_cart_reducer__WEBPACK_IMPORTED_MODULE_31__["reducerCart"]
        }), //material
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], //-----end material
        _material_extended_mde__WEBPACK_IMPORTED_MODULE_7__["MdePopoverModule"], ngx_skltn__WEBPACK_IMPORTED_MODULE_5__["NgxSkltnModule"].forRoot(skltnConfig), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_23__["NgxPageScrollCoreModule"].forRoot({
          duration: 1500
        }), ngx_page_scroll__WEBPACK_IMPORTED_MODULE_24__["NgxPageScrollModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _shared_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _shared_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"], _single_restaurant_single_restaurant_component__WEBPACK_IMPORTED_MODULE_13__["SingleRestaurantComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_14__["CheckoutComponent"], _shared_sheduled_deliver_model_sheduled_deliver_model_component__WEBPACK_IMPORTED_MODULE_17__["SheduledDeliverModelComponent"], _account_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_18__["FavouritesComponent"], _account_orders_orders_component__WEBPACK_IMPORTED_MODULE_19__["OrdersComponent"], _account_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__["MyAccountComponent"], _account_payments_payments_component__WEBPACK_IMPORTED_MODULE_21__["PaymentsComponent"], _account_addresses_addresses_component__WEBPACK_IMPORTED_MODULE_22__["AddressesComponent"], _single_restaurant_add_item_model_add_item_model_component__WEBPACK_IMPORTED_MODULE_25__["AddItemModelComponent"], _single_restaurant_meal_meal_component__WEBPACK_IMPORTED_MODULE_30__["MealComponent"], _account_change_info_component_change_info_component_component__WEBPACK_IMPORTED_MODULE_32__["ChangeInfoComponentComponent"], _account_addresses_new_address_new_address_component__WEBPACK_IMPORTED_MODULE_33__["NewAddressComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_27__["StoreRootModule"], //material
          _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], //-----end material
          _material_extended_mde__WEBPACK_IMPORTED_MODULE_7__["MdePopoverModule"], ngx_skltn__WEBPACK_IMPORTED_MODULE_5__["NgxSkltnModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_23__["NgxPageScrollCoreModule"], ngx_page_scroll__WEBPACK_IMPORTED_MODULE_24__["NgxPageScrollModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "aI8T":
    /*!*************************************************!*\
      !*** ./src/app/shared/login/login.component.ts ***!
      \*************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function aI8T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2/dist/sweetalert2.js */
      "PdH4");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_write_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/write.service */
      "RN/e");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "IRfi");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");

      var _c0 = function _c0() {
        return ["/signup"];
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(loginService, router, accountState) {
          _classCallCheck(this, LoginComponent);

          this.loginService = loginService;
          this.router = router;
          this.accountState = accountState;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginFormgroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
            }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
          }
        }, {
          key: "login",
          value: function login() {
            var _this15 = this;

            if (this.loginFormgroup.valid) {
              this.user = {
                name: this.loginFormgroup.controls.username.value,
                account: {
                  password: this.loginFormgroup.controls.password.value
                }
              };
              this.loginService.logIn(this.user).subscribe(function (data) {
                if (data.access) {
                  _this15.accountState.addAccount(data);

                  _this15.router.navigate(["/home"]);
                } else {
                  sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Login', 'Utilizador/password invalido', 'error');
                }
              });
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_write_service__WEBPACK_IMPORTED_MODULE_5__["WriteService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 25,
        vars: 3,
        consts: [[1, "login-container"], [2, "width", "100%", "text-align", "center", "margin-bottom", "30px"], ["src", "../../../assets/logo_orig.png", 1, "fadeIn"], [2, "margin", "40px 0px", "width", "100%"], [1, "login-input-box", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "input-box", "full-width", 2, "margin-top", "10px"], ["matInput", "", "placeholder", "Numero de T\xE9lemovel", "formControlName", "username", 1, "input-text"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password", 1, "input-text"], ["mat-raised-button", "", 1, "full-width", "full-height", "accent-background", 2, "height", "45px", 3, "click"], [2, "text-align", "center", "margin-top", "15px"], ["routerLinkActive", "active", 3, "routerLink"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Bem Vindo");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Entre com o seu numero de t\xE9lemovel ou endere\xE7o e-mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Numero de T\xE9lemovel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Novo na Pede agora? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Criar uma conta");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginFormgroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]],
        styles: [".login-container[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  width: 100%;\n  min-height: 450px;\n  display: flex;\n  justify-content: center;\n}\n\na[_ngcontent-%COMP%] {\n  color: #cca028;\n  -webkit-text-decoration-color: #cca028;\n          text-decoration-color: #cca028;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYWNjb3VudFxcYWRkcmVzc2VzXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQUVKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYXtcbiAgICBjb2xvcjogcmdiKDIwNCwgMTYwLCA0MCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZ2IoMjA0LCAxNjAsIDQwKTtcbn1cblxuIl19 */"]
      });
      /***/
    },

    /***/
    "b414":
    /*!**********************************************************!*\
      !*** ./src/app/single-restaurant/meal/meal.component.ts ***!
      \**********************************************************/

    /*! exports provided: MealComponent */

    /***/
    function b414(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MealComponent", function () {
        return MealComponent;
      });
      /* harmony import */


      var _add_item_model_add_item_model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../add-item-model/add-item-model.component */
      "6LmY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_skltn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-skltn */
      "dWUj");

      function MealComponent_ng_container_1_skltn_root_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "skltn-root", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rectRadius", 10);
        }
      }

      function MealComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MealComponent_ng_container_1_skltn_root_2_Template, 7, 1, "skltn-root", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.loader);
        }
      }

      function MealComponent_div_3_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 20);
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r4.foto, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function MealComponent_div_3_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 20);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r7.getFoto(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function MealComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealComponent_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var item_r4 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r9.addItemDialog(item_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MealComponent_div_3_img_1_Template, 1, 1, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MealComponent_div_3_ng_template_2_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r4.foto)("ngIfElse", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.descricao);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r4.preco, " \u20AC");
        }
      }

      var MealComponent = /*#__PURE__*/function () {
        function MealComponent(router, dialog) {
          var _this16 = this;

          _classCallCheck(this, MealComponent);

          this.router = router;
          this.dialog = dialog;
          this.loader = Array(5);
          this.produtos = null;
          this.navSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivationEnd"]) {
              _this16.produtos = _this16.router.getCurrentNavigation().extras.state ? _this16.router.getCurrentNavigation().extras.state[0] : undefined;
              _this16.catfoto = _this16.router.getCurrentNavigation().extras.state ? _this16.router.getCurrentNavigation().extras.state[1] : undefined;
              _this16.grupos = _this16.router.getCurrentNavigation().extras.state ? _this16.router.getCurrentNavigation().extras.state[2] : undefined;

              if (!_this16.produtos) {
                _this16.produtos = JSON.parse(localStorage.getItem("Categoria"));
                _this16.catfoto = localStorage.getItem("foto");
                _this16.grupos = JSON.parse(localStorage.getItem('Grupos'));
              }
            }
          });
        }

        _createClass(MealComponent, [{
          key: "getFoto",
          value: function getFoto() {
            return this.catfoto;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.navSubscription.unsubscribe();
          }
        }, {
          key: "addItemDialog",
          value: function addItemDialog(meal) {
            var dialogRef = this.dialog.open(_add_item_model_add_item_model_component__WEBPACK_IMPORTED_MODULE_0__["AddItemModelComponent"], {
              width: '1000px',
              data: [meal, this.grupos]
            });
            dialogRef.afterClosed().subscribe(function (result) {// if (result) {
              //   this.deliveryDate = result.deliveryDate;
              //   this.deliveryTime = result.deliveryTime;
              //   this.selectedDeliveryTime.data = result.deliveryDate + ' ' + result.deliveryTime;
              // } else {
              //   this.selectedDeliveryTime = this.deliveryTimeSelection[0];
              // }
            });
          }
        }]);

        return MealComponent;
      }();

      MealComponent.ɵfac = function MealComponent_Factory(t) {
        return new (t || MealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
      };

      MealComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MealComponent,
        selectors: [["app-meal"]],
        decls: 4,
        vars: 2,
        consts: [[1, "container"], [4, "ngIf"], ["class", "box-wrapper", 3, "click", 4, "ngFor", "ngForOf"], [1, "card-container"], ["class", "card", "duration", "1000", "flareWidth", "50%", "bgFill", "#d8d5d1", "flareFill", "rgba(255,255,255, 0.5)", 3, "rectRadius", 4, "ngFor", "ngForOf"], ["duration", "1000", "flareWidth", "50%", "bgFill", "#d8d5d1", "flareFill", "rgba(255,255,255, 0.5)", 1, "card", 3, "rectRadius"], [1, "skltn-card"], ["skltn-bone", "", "type", "circle", 1, "skltn-card__avatar"], [1, "skltn-card__body"], ["skltn-bone", "", 1, "skltn-card__title"], ["skltn-bone", "", 1, "skltn-card__line"], [1, "box-wrapper", 3, "click"], [3, "src", 4, "ngIf", "ngIfElse"], ["fallback", ""], [1, "box-content"], [1, "buy"], [1, "icon"], [1, "title"], [1, "desc"], [1, "price"], [3, "src"]],
        template: function MealComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MealComponent_ng_container_1_Template, 3, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MealComponent_div_3_Template, 14, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.produtos);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.produtos);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_skltn__WEBPACK_IMPORTED_MODULE_5__["SkltnComponent"], ngx_skltn__WEBPACK_IMPORTED_MODULE_5__["SkltnBoneDirective"]],
        styles: ["@import url(https://fonts.googleapis.com/css?family=Satisfy);\n@import url(https://fonts.googleapis.com/css?family=Acme);\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 2fr);\n  grid-gap: 50px;\n  align-items: center;\n  justify-items: center;\n}\n.box-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 5px 15px 40px -20px lightslategray;\n  min-height: 450px;\n  max-height: 450px;\n  min-width: 320px;\n  max-width: 320px;\n  transition: 100ms linear;\n}\n.box-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 214px;\n  min-height: 214px;\n  max-width: 330px;\n}\n.box-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: 900;\n  text-transform: uppercase;\n  margin: 0;\n  font-family: \"Acme\", sans-serif;\n}\n.box-wrapper[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-family: \"Satisfy\", cursive;\n  font-size: 1.2em;\n  min-height: 40px;\n  padding: auto;\n  text-align: center;\n}\n.box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 115%;\n  height: 100px;\n  position: absolute;\n  display: block;\n  background-color: #fff;\n  transform: rotate(-8deg);\n  top: -50px;\n  left: -10%;\n  z-index: -1;\n  border-radius: 20%;\n}\n.box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%] {\n  display: block;\n  top: -80px;\n  right: 30px;\n  z-index: 2;\n  width: 70px;\n  height: 70px;\n  position: absolute;\n}\n.box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background-color: #06D6A0;\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  font-size: 36px;\n  color: #fff;\n  transition: all 0.3s ease;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n}\n.box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-image: url('cart.ico');\n  background-repeat: no-repeat;\n}\n.expanded[_ngcontent-%COMP%]   .box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 750px;\n  height: 750px;\n}\n.expanded[_ngcontent-%COMP%]   .box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: none;\n}\n.box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: 900;\n  display: block;\n  width: 100px;\n  margin: 20px auto 0;\n  position: relative;\n  font-family: \"Satisfy\", cursive;\n  text-align: center;\n}\n.box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]:after, .box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]:before {\n  content: \"\";\n  height: 1px;\n  width: 50px;\n  display: block;\n  position: absolute;\n  background-color: #ddd;\n  top: 18px;\n}\n.box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]:before {\n  left: -50px;\n}\n.box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]:after {\n  right: -50px;\n}\n.box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 1em 0;\n}\n.box-wrapper[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #EFD829;\n}\n.box-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.04);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYWNjb3VudFxcYWRkcmVzc2VzXFxtZWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDREQUFBO0FBQ0EseURBQUE7QUFFUjtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQUo7QUFHQTtFQUNJLDhDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUFKO0FBRUk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ04sZ0JBQUE7QUFBRjtBQUlJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7QUFGUjtBQUtJO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQU1JO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBSlI7QUFNUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUpaO0FBT1E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUxaO0FBT1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUxoQjtBQVNnQjtFQUNJLGlDQUFBO0VBQ0EsNEJBQUE7QUFQcEI7QUFVZ0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQVJwQjtBQVVvQjtFQUNJLGFBQUE7QUFSeEI7QUFjUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFaWjtBQWNZO0VBRUksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBYmhCO0FBZ0JZO0VBQ0ksV0FBQTtBQWRoQjtBQWlCWTtFQUNJLFlBQUE7QUFmaEI7QUFvQlk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBbEJoQjtBQW9CZ0I7RUFDSSxjQUFBO0FBbEJwQjtBQXlCQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtBQXRCSiIsImZpbGUiOiJtZWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNhdGlzZnkpO1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWNtZSk7XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMmZyKTtcclxuICAgIGdyaWQtZ2FwOiA1MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJveC13cmFwcGVye1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDE1cHggNDBweCAtMjBweCBsaWdodHNsYXRlZ3JheTtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgIHRyYW5zaXRpb246IDEwMG1zIGxpbmVhcjsgXHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMTRweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMTRweDtcclxuXHRcdG1heC13aWR0aDogMzMwcHg7XHJcbiAgICAgICAgXHJcblx0fVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0FjbWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2F0aXNmeScsIGN1cnNpdmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3gtY29udGVudHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIFxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMTUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XHJcbiAgICAgICAgICAgIHRvcDogLTUwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0xMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5idXkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdG9wOiAtODBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNkQ2QTA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDsgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2NhcnQuaWNvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhwYW5kZWQgJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzUwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0byAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2F0aXNmeScsIGN1cnNpdmU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICY6YWZ0ZXIsXHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMThweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxZW0gMDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRUZEODI5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYm94LXdyYXBwZXI6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuICAgIl19 */"]
      });
      /***/
    },

    /***/
    "c14U":
    /*!******************************************!*\
      !*** ./src/app/services/cart.service.ts ***!
      \******************************************/

    /*! exports provided: CartService */

    /***/
    function c14U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _read_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./read.service */
      "SYVY");
      /* harmony import */


      var _write_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./write.service */
      "RN/e");

      var CartService = /*#__PURE__*/function () {
        function CartService(readService, writeService) {
          _classCallCheck(this, CartService);

          this.readService = readService;
          this.writeService = writeService;
          this.getCart();
        }

        _createClass(CartService, [{
          key: "getCart",
          value: function getCart() {
            var _this17 = this;

            this.readService.getCart().subscribe(function (data) {
              _this17.cart = data;
            });
          }
        }, {
          key: "setTracker",
          value: function setTracker(tracker) {
            this.cart.tracker = tracker;
          }
        }, {
          key: "addToCart",
          value: function addToCart(item) {
            this.writeService.addItem(this.cart, item);
          }
        }]);

        return CartService;
      }();

      CartService.ɵfac = function CartService_Factory(t) {
        return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_read_service__WEBPACK_IMPORTED_MODULE_1__["ReadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_write_service__WEBPACK_IMPORTED_MODULE_2__["WriteService"]));
      };

      CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CartService,
        factory: CartService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "i6Sy":
    /*!************************************************************!*\
      !*** ./src/app/account/my-account/my-account.component.ts ***!
      \************************************************************/

    /*! exports provided: MyAccountComponent */

    /***/
    function i6Sy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function () {
        return MyAccountComponent;
      });
      /* harmony import */


      var _change_info_component_change_info_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../change-info-component/change-info-component.component */
      "qQsv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "LcAk");
      /* harmony import */


      var _services_read_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/read.service */
      "SYVY");
      /* harmony import */


      var _services_write_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/write.service */
      "RN/e");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "active_item": a0
        };
      };

      var _c1 = function _c1() {
        return ["/my-account/orders"];
      };

      var _c2 = function _c2() {
        return ["/my-account/favourites"];
      };

      var _c3 = function _c3() {
        return ["/my-account/payments"];
      };

      var _c4 = function _c4() {
        return ["/my-account/addresses"];
      };

      var MyAccountComponent = /*#__PURE__*/function () {
        function MyAccountComponent(router, matDialog, readService, writeService) {
          var _this18 = this;

          _classCallCheck(this, MyAccountComponent);

          this.router = router;
          this.matDialog = matDialog;
          this.readService = readService;
          this.writeService = writeService;
          this.currentRoute = "orders";
          this.readService.getAccount().subscribe(function (data) {
            _this18.AccountToken = data;
            console.log(data);

            if (!_this18.AccountToken.access) {
              _this18.router.navigate(['/login']);
            }

            _this18.account = data.account;
          });
        }

        _createClass(MyAccountComponent, [{
          key: "changeChildRoute",
          value: function changeChildRoute(name) {
            this.currentRoute = name;
          }
        }, {
          key: "logout",
          value: function logout() {
            this.AccountToken = {
              access: false,
              account: {}
            };
            this.writeService.addAccount(this.AccountToken);
            this.router.navigate(['/home']).then(function () {
              window.location.reload();
            });
          }
        }, {
          key: "editPassword",
          value: function editPassword() {
            var dialogRef = this.matDialog.open(_change_info_component_change_info_component_component__WEBPACK_IMPORTED_MODULE_0__["ChangeInfoComponentComponent"], {
              width: '400px',
              data: this.account
            });
            dialogRef.afterClosed().subscribe(function (result) {// if (result) {
              //   this.deliveryDate = result.deliveryDate;
              //   this.deliveryTime = result.deliveryTime;
              //   this.selectedDeliveryTime.data = result.deliveryDate + ' ' + result.deliveryTime;
              // } else {
              //   this.selectedDeliveryTime = this.deliveryTimeSelection[0];
              // }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MyAccountComponent;
      }();

      MyAccountComponent.ɵfac = function MyAccountComponent_Factory(t) {
        return new (t || MyAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_read_service__WEBPACK_IMPORTED_MODULE_4__["ReadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_write_service__WEBPACK_IMPORTED_MODULE_5__["WriteService"]));
      };

      MyAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MyAccountComponent,
        selectors: [["app-my-account"]],
        decls: 53,
        vars: 23,
        consts: [[1, "myaccount-container"], [1, "myaccount-container-body", "second-view"], [1, "secondary-container-header"], [1, "header-text"], [1, "primary-text"], [1, "secondary-text"], [2, "margin-left", "20px"], [1, "edit-button-container"], [1, "edit-button-box"], ["mat-raised-button", "", 1, "edit-button-text", 3, "click"], [1, "body"], [1, "list-view"], [1, "list-box"], ["routerLinkActive", "active", 1, "item", 3, "ngClass", "routerLink", "click"], [1, "text", "flex-item-center"], [2, "transform", "translateY(2px)"], ["fontSet", "material-icons-outlined", 1, "icon"], [2, "margin-left", "10px"], ["routerLinkActive", "active", "disabled", "", 1, "item", 3, "ngClass", "routerLink", "click"], [1, "result-view"], [1, "result-box"]],
        template: function MyAccountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_13_listener() {
              return ctx.editPassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Modificar Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_16_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountComponent_Template_li_click_22_listener() {
              return ctx.changeChildRoute("orders");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " all_out ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Pedidos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountComponent_Template_li_click_29_listener() {
              return ctx.changeChildRoute("favourites");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " favorite_border ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Favoritos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountComponent_Template_li_click_36_listener() {
              return ctx.changeChildRoute("payments");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " payment ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " M\xE9todos de pagamento ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountComponent_Template_li_click_43_listener() {
              return ctx.changeChildRoute("addresses");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " near_me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Moradas ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.account.nome);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.account.telefone);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.account.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.currentRoute == "orders"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx.currentRoute == "favourites"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.currentRoute == "payments"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c0, ctx.currentRoute == "addresses"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c4));
          }
        },
        directives: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".myaccount-container[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  width: 100%;\n}\n\n.myaccount-container-body[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n\n.edit-button-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.edit-button-container[_ngcontent-%COMP%]   .edit-button-box[_ngcontent-%COMP%] {\n  margin: 20px 2px;\n  color: #fff;\n  border: 1px solid #fff;\n  margin-left: 2px;\n  margin-right: 2px;\n}\n\n.edit-button-container[_ngcontent-%COMP%]   .edit-button-box[_ngcontent-%COMP%]   .edit-button-text[_ngcontent-%COMP%] {\n  border-radius: 0;\n  background: transparent;\n  color: #fff;\n  font-size: 14px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n.edit-button-container[_ngcontent-%COMP%]   .edit-button-box[_ngcontent-%COMP%]   .edit-button-text[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #d4a300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhZGRyZXNzZXNcXG15LWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNSOztBQUNRO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNaOztBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBQVoiLCJmaWxlIjoibXktYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm15YWNjb3VudC1jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm15YWNjb3VudC1jb250YWluZXItYm9keXtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5lZGl0LWJ1dHRvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuZWRpdC1idXR0b24tYm94IHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDJweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgICBcbiAgICAgICAgLmVkaXQtYnV0dG9uLXRleHR7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwOyBcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lZGl0LWJ1dHRvbi10ZXh0OmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjZDRhMzAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbiAgICBcblxuIl19 */"]
      });
      /***/
    },

    /***/
    "jQpT":
    /*!***************************************************!*\
      !*** ./src/app/shared/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function jQpT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 28,
        vars: 0,
        consts: [[1, "footer"], [1, "container"], [1, "first"], ["src", "../assets/logo_orig (1).png"], [1, "second"], [1, "list", 2, "line-height", "2.5"], [1, "third"], [1, "copyright"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ajuda");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Informa\xE7oes de entregas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Devolu\xE7\xF5es e Trocas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Termos e condi\xE7\xF5es");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pol\xEDtica de Privacidade");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tem Perguntas ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Endere\xE7o completamente falso so pra testar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "+351 123 456 789");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "geral@pedeagora.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Coisas sobre copyright vao pra aqui");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".footer[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n  padding-top: 40px;\n}\n\n.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 0px 5%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.first[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.second[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n\n.third[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-top: 20px;\n  text-align: center;\n}\n\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  text-align: center;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYWNjb3VudFxcYWRkcmVzc2VzXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLE9BQUE7QUFHSjs7QUFBQTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtBQUdKOztBQUNBO0VBQ0ksT0FBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uZm9vdGVyIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweCA1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmlyc3Qge1xuICAgIGZsZXg6IDE7XG59XG5cbi5zZWNvbmQge1xuICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi50aGlyZCB7XG4gICAgZmxleDogMTtcbn1cbi5mb290ZXIgLmNvcHlyaWdodCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "kwqi":
    /*!*********************************************!*\
      !*** ./src/app/reducers/account.reducer.ts ***!
      \*********************************************/

    /*! exports provided: reducerAccount */

    /***/
    function kwqi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducerAccount", function () {
        return reducerAccount;
      });
      /* harmony import */


      var _actions_account_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../actions/account.action */
      "HMK8");

      var initialState = {
        access: false,
        account: {}
      };

      function reducerAccount() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _actions_account_action__WEBPACK_IMPORTED_MODULE_0__["ADD_ACCOUNT"]:
            return action.payload;

          default:
            return state;
        }
      }
      /***/

    },

    /***/
    "lo8X":
    /*!*****************************************!*\
      !*** ./src/app/actions/cart.actions.ts ***!
      \*****************************************/

    /*! exports provided: REMOVE_CART, SAVE_CART, ADD_ORDER, UPDATE_ORDER, STORAGE_KEYS, SaveCart, AddOrder, DeleteCart, UpdateOrder */

    /***/
    function lo8X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REMOVE_CART", function () {
        return REMOVE_CART;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SAVE_CART", function () {
        return SAVE_CART;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ADD_ORDER", function () {
        return ADD_ORDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UPDATE_ORDER", function () {
        return UPDATE_ORDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STORAGE_KEYS", function () {
        return STORAGE_KEYS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaveCart", function () {
        return SaveCart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddOrder", function () {
        return AddOrder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteCart", function () {
        return DeleteCart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateOrder", function () {
        return UpdateOrder;
      });

      var REMOVE_CART = "[CART] Remove";
      var SAVE_CART = "[CART] Save";
      var ADD_ORDER = "[CART] Add";
      var UPDATE_ORDER = "[CART] Update";
      var STORAGE_KEYS = {
        cart: "CART"
      };

      var SaveCart = function SaveCart(payload) {
        _classCallCheck(this, SaveCart);

        this.payload = payload;
        this.type = SAVE_CART;
      };

      var AddOrder = function AddOrder(cart, order) {
        _classCallCheck(this, AddOrder);

        this.cart = cart;
        this.order = order;
        this.type = ADD_ORDER;
      };

      var DeleteCart = function DeleteCart() {
        _classCallCheck(this, DeleteCart);

        this.type = REMOVE_CART;
      };

      var UpdateOrder = function UpdateOrder(newItem) {
        _classCallCheck(this, UpdateOrder);

        this.newItem = newItem;
        this.type = UPDATE_ORDER;
      };
      /***/

    },

    /***/
    "nq2s":
    /*!********************************************************!*\
      !*** ./src/app/reducers/selectedRestaurant.reducer.ts ***!
      \********************************************************/

    /*! exports provided: reducerSelectedRestaurant */

    /***/
    function nq2s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducerSelectedRestaurant", function () {
        return reducerSelectedRestaurant;
      });
      /* harmony import */


      var _actions_restaurant_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../actions/restaurant.action */
      "vGd0");

      var initialState = {};

      function reducerSelectedRestaurant() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _actions_restaurant_action__WEBPACK_IMPORTED_MODULE_0__["SELECT_RESTAURANT"]:
            return action.payload;

          default:
            return state;
        }
      }
      /***/

    },

    /***/
    "pnB3":
    /*!**********************************************************!*\
      !*** ./src/app/account/addresses/addresses.component.ts ***!
      \**********************************************************/

    /*! exports provided: AddressesComponent */

    /***/
    function pnB3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressesComponent", function () {
        return AddressesComponent;
      });
      /* harmony import */


      var _new_address_new_address_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-address/new-address.component */
      "1UMf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_read_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/read.service */
      "SYVY");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "LcAk");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");

      function AddressesComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gerir Moradas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddressesComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var morada_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](morada_r2.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](morada_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](morada_r2.rua);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", morada_r2.codigoPostal, " - ", morada_r2.cidade, "");
        }
      }

      var AddressesComponent = /*#__PURE__*/function () {
        function AddressesComponent(readService, matDialog) {
          _classCallCheck(this, AddressesComponent);

          this.readService = readService;
          this.matDialog = matDialog;
          this.fullComponent = true;
        }

        _createClass(AddressesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.readService.getAccount().subscribe(function (data) {
              _this19.conta = data.account;
            });
          }
        }, {
          key: "createNewAddress",
          value: function createNewAddress() {
            var dialogRef = this.matDialog.open(_new_address_new_address_component__WEBPACK_IMPORTED_MODULE_0__["NewAddressComponent"], {
              width: '1000px'
            });
          }
        }]);

        return AddressesComponent;
      }();

      AddressesComponent.ɵfac = function AddressesComponent_Factory(t) {
        return new (t || AddressesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_read_service__WEBPACK_IMPORTED_MODULE_2__["ReadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
      };

      AddressesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddressesComponent,
        selectors: [["app-addresses"]],
        decls: 6,
        vars: 2,
        consts: [[4, "ngIf"], [1, "address-box-container"], ["class", "address-box-card", 4, "ngFor", "ngForOf"], ["mat-button", ""], [1, "material-icons"], [1, "address-box-card"], [1, "address-box-header"], ["fontSet", "material-icons-outlined"], [2, "margin-left", "10px"], [1, "address-box-footer"]],
        template: function AddressesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddressesComponent_div_0_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddressesComponent_div_2_Template, 11, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fullComponent);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.conta.moradas);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: [".address-box-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 40px 0px 0px 0px;\n}\n.address-box-container[_ngcontent-%COMP%]   .address-box-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 20px;\n  border: 1px solid lightgray;\n  width: 280px;\n}\n.address-box-container[_ngcontent-%COMP%]   .address-box-card[_ngcontent-%COMP%]   .address-box-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.address-box-container[_ngcontent-%COMP%]   .address-box-card[_ngcontent-%COMP%]   .address-box-footer[_ngcontent-%COMP%] {\n  color: #93959f;\n  line-height: 1.3;\n  padding-top: 5px;\n  margin-left: 34px;\n}\n.address-box-container[_ngcontent-%COMP%]   .address-box-card[_ngcontent-%COMP%]:nth-child(even) {\n  margin-left: 20px;\n}\n.address-box-container[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  max-height: 130px;\n}\n.address-box-container[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 48px !important;\n  width: 48px !important;\n  font-size: 48px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3Nlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVaO0FBQVE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRVo7QUFFSTtFQUNJLGlCQUFBO0FBQVI7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUlJO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBRlIiLCJmaWxlIjoiYWRkcmVzc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHJlc3MtYm94LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IDQwcHggMHB4IDBweCAwcHg7XG5cbiAgICAuYWRkcmVzcy1ib3gtY2FyZHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgIC5hZGRyZXNzLWJveC1oZWFkZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYWRkcmVzcy1ib3gtZm9vdGVye1xuICAgICAgICAgICAgY29sb3I6ICM5Mzk1OWY7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFkZHJlc3MtYm94LWNhcmQ6bnRoLWNoaWxkKGV2ZW4pIHsgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgIC5tYXQtYnV0dG9ue1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMzBweDtcbiAgICB9XG4gICAgXG4gICAgLm1hdC1pY29ue1xuICAgICAgICBoZWlnaHQ6NDhweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDo0OHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTo0OHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "qQsv":
    /*!**********************************************************************************!*\
      !*** ./src/app/account/change-info-component/change-info-component.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ChangeInfoComponentComponent */

    /***/
    function qQsv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangeInfoComponentComponent", function () {
        return ChangeInfoComponentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "LcAk");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "IRfi");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");

      var ChangeInfoComponentComponent = /*#__PURE__*/function () {
        function ChangeInfoComponentComponent(dialogRef) {
          _classCallCheck(this, ChangeInfoComponentComponent);

          this.dialogRef = dialogRef;
        }

        _createClass(ChangeInfoComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }]);

        return ChangeInfoComponentComponent;
      }();

      ChangeInfoComponentComponent.ɵfac = function ChangeInfoComponentComponent_Factory(t) {
        return new (t || ChangeInfoComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      ChangeInfoComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChangeInfoComponentComponent,
        selectors: [["app-change-info-component"]],
        decls: 25,
        vars: 1,
        consts: [[1, "password-change-container"], [1, "model-header"], [1, "model-body"], ["matInput", "", "type", "password"], [1, "model-footer", "flex-item-center"], [1, "small-gap"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "full-width", "full-height", "success-background", 3, "mat-dialog-close"]],
        template: function ChangeInfoComponentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Modificar Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password anterior");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password Nova");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Repita a nova Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Modificar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]],
        styles: [".password-change-container[_ngcontent-%COMP%] {\n  min-height: 300px;\n  min-width: 200px;\n  align-content: center;\n  justify-content: center;\n}\n.password-change-container[_ngcontent-%COMP%]   .model-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.password-change-container[_ngcontent-%COMP%]   .model-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-self: center;\n  align-content: space-around;\n  justify-content: space-around;\n  align-items: center;\n}\n.password-change-container[_ngcontent-%COMP%]   .model-footer[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 0px 20px;\n  margin-bottom: 20px;\n}\n.mat-select-arrow[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhZGRyZXNzZXNcXGNoYW5nZS1pbmZvLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQ0E7RUFDSSw4QkFBQTtBQUVKIiwiZmlsZSI6ImNoYW5nZS1pbmZvLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZC1jaGFuZ2UtY29udGFpbmVye1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAubW9kZWwtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5tb2RlbC1ib2R5e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5tb2RlbC1mb290ZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "vGd0":
    /*!**********************************************!*\
      !*** ./src/app/actions/restaurant.action.ts ***!
      \**********************************************/

    /*! exports provided: SELECT_RESTAURANT, STORAGE_KEYS, SelectRestaurant */

    /***/
    function vGd0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SELECT_RESTAURANT", function () {
        return SELECT_RESTAURANT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STORAGE_KEYS", function () {
        return STORAGE_KEYS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectRestaurant", function () {
        return SelectRestaurant;
      });

      var SELECT_RESTAURANT = "[RESTAURANT] Select";
      var STORAGE_KEYS = {
        selectedRestaurant: "SELECTED_RESTAURANT"
      };

      var SelectRestaurant = function SelectRestaurant(payload) {
        _classCallCheck(this, SelectRestaurant);

        this.payload = payload;
        this.type = SELECT_RESTAURANT;
      };
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/login/login.component */
      "aI8T");
      /* harmony import */


      var _shared_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/signup/signup.component */
      "34WV");
      /* harmony import */


      var _account_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./account/my-account/my-account.component */
      "i6Sy");
      /* harmony import */


      var _account_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account/favourites/favourites.component */
      "PrkK");
      /* harmony import */


      var _account_orders_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account/orders/orders.component */
      "GIMH");
      /* harmony import */


      var _account_payments_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./account/payments/payments.component */
      "F7Ve");
      /* harmony import */


      var _account_addresses_addresses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./account/addresses/addresses.component */
      "pnB3");
      /* harmony import */


      var _single_restaurant_single_restaurant_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./single-restaurant/single-restaurant.component */
      "GAEs");
      /* harmony import */


      var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./checkout/checkout.component */
      "IiZn");
      /* harmony import */


      var _single_restaurant_meal_meal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./single-restaurant/meal/meal.component */
      "b414");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }, {
        path: 'restaurants/:id',
        component: _single_restaurant_single_restaurant_component__WEBPACK_IMPORTED_MODULE_9__["SingleRestaurantComponent"],
        children: [{
          path: ':categoria',
          component: _single_restaurant_meal_meal_component__WEBPACK_IMPORTED_MODULE_11__["MealComponent"]
        }]
      }, {
        path: 'login',
        component: _shared_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'signup',
        component: _shared_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
      }, {
        path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"]
      }, {
        path: 'my-account',
        component: _account_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_4__["MyAccountComponent"],
        children: [{
          path: 'favourites',
          component: _account_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_5__["FavouritesComponent"]
        }, {
          path: 'orders',
          component: _account_orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"]
        }, {
          path: 'payments',
          component: _account_payments_payments_component__WEBPACK_IMPORTED_MODULE_7__["PaymentsComponent"]
        }, {
          path: 'addresses',
          component: _account_addresses_addresses_component__WEBPACK_IMPORTED_MODULE_8__["AddressesComponent"]
        }, {
          path: '',
          redirectTo: 'orders',
          pathMatch: 'full'
        }, {
          path: '**',
          redirectTo: 'orders',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          anchorScrolling: 'enabled',
          useHash: false
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map