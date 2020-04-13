"use strict";

import { FormModel } from "./script/formMV/formModel";
import { FormView } from "./script/formMV/formView";
import { FormController } from "./script/formMV/formController";

import { ListModel } from "./script/listMV/listModel";
import { ListView } from "./script/listMV/listView";
import { ListController } from "./script/listMV/listController";

import { RoutePage } from "./script/routePage";

const routePage = new RoutePage();

const formModel = new FormModel();
const formView = new FormView();
const formController = new FormController(formModel, formView, routePage);
formController.handlerRenderForm();

const listModel = new ListModel();
const listView = new ListView();
const listController = new ListController(listModel, listView, routePage);
