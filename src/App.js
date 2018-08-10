import './App.css';
import React from 'react';
import {
    withRouter,
    Link,
} from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes';
import { todoStore } from './mobx_store';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

class App extends React.Component {

    renderMenu = () => (
        <ul className={'menu'}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/new'}>React 16.x new feature</Link></li>
            <li><Link to={'/calendar'}>Calendar</Link></li>
            <li><Link to={'/google-sheet'}>Google Sheet</Link></li>
            <li><Link to={'/rx'}>Rx.js</Link></li>
            <li><Link to={'/editor'}>TUIEditor</Link></li>
            <li><Link to={'/decorator'}>Decorator Test</Link></li>
            <li><Link to={'/zzalbang'}>Zzalbang</Link></li>
            <li><Link to={'/mui'}>MaterialUI</Link></li>
            <li><Link to={'/reselect'}>Reselect Example</Link></li>
            <li><Link to={'/mobx'}>MobX</Link></li>
            <li><Link to={'/videojs'}>VideoJs</Link></li>
        </ul>
    );

    render() {
        return (
            <Provider
                todoStore={todoStore}
            >
                <div className={this.props.className}>
                    <DevTools/>
                    {this.renderMenu()}
                    <div className={'routes'}>
                        {routes}
                    </div>
                </div>
            </Provider>
        );
    }
}

const StyledApp = styled(App)`
  box-sizing: border-box;
  display: flex;
  & .menu {
    border-right: 1px dashed gray;
    flex-shrink: 0;
    flex-basis: 200px;
  }
  & .routes {
    width: 100%;
    padding: 0.8rem;
  }
`;

export default withRouter(StyledApp);