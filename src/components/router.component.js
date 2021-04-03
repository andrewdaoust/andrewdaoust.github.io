import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Nav } from './nav.component';
import { AboutMe } from './about-me.component';
import { Resume } from './resume.component';

export function Router() {
  const [current, setCurrent] = useState('home');
  useEffect(() => {
    setRoute();
    window.addEventListener('hashchange', setRoute);
    return () => window.removeEventListener('hashchange', setRoute);
  }, []);

  function setRoute() {
    const location = window.location.href.split('/');
    const pathname = location[location.length-1];
    console.log('pathname: ', pathname);
    setCurrent(pathname ? pathname : 'home');
  }

  return (
    <HashRouter>
      <Nav current={current} />
      <Switch>
        <Route exact path='/' component={AboutMe} />
        <Route path='/resume' component={Resume} />
        <Route component={AboutMe} />
      </Switch>
    </HashRouter>
  )
}
