import Head from './Head';

const Layout = props => (
    <div>
        <Head />
        {props.children}
    </div>
);

export default Layout;