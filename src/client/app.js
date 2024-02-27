import React from 'react';
import { createRoot } from 'react-dom/client';

import '@elastic/eui/dist/eui_theme_light.css';
import '../scss/main.scss';

import {
  EuiProvider,
  EuiText,
  EuiPageTemplate,
  EuiHeaderLogo
} from '@elastic/eui';

const App = () => (
  <EuiProvider colorMode="light">
    <EuiPageTemplate grow>
      <div className="promo-header">
        <EuiText>Promo Header</EuiText>
      </div>
      <EuiPageTemplate.Header>
        <EuiHeaderLogo
          iconType="logoElasticStack"
          href="#"
        />
      </EuiPageTemplate.Header>
      <EuiPageTemplate.Section grow>Body content</EuiPageTemplate.Section>
      <EuiPageTemplate.BottomBar>Page Footer</EuiPageTemplate.BottomBar>
    </EuiPageTemplate>
  </EuiProvider>
);

const domRoot = document.getElementById('master');
const root = createRoot(domRoot);
root.render(<App />);
