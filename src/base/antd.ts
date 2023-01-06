import { app } from "@/base/index";
import {
  Button,
  Col,
  Layout,
  Menu,
  message,
  PageHeader,
  Row,
  Slider,
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
app.use(Button);
app.use(Row);
app.use(Col);
app.use(Menu);
app.use(Layout);
app.use(Slider);
app.use(PageHeader);
app.config.globalProperties.$message = message;
