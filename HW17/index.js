"use strict";

import { Model } from "./script/model";

import { ListView } from "./script/listView";
import { FormView } from "./script/formView";

import { Controller } from "./script/controller";

const model = new Model();
const formView = new FormView();
const listView = new ListView();

const controller = new Controller(model, formView, listView);
controller.handlerRenderForm();
