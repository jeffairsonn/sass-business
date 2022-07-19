import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Heading from './components/heading';

const HomeContent = () => {
    return <div>home</div>;
};

const Home = () => {
    return (
        <Heading>
            <HomeContent />
        </Heading>
    );
};

export default Home;
