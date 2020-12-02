import './css/style.css';
import './css/style.scss';

import Trainer from './components/Trainer';
import Controller from './components/controller/Controller';
import Interface from './components/views/Interface';

const start = new Trainer(new Interface(), new Controller());