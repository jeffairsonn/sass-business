import Head from 'next/head';
import styles from '../styles/Home.module.css';
import GeneratedImage from './components/GeneratedImage';
import GlobalGeneratedStats from './components/GlobalGeneratedStats';
import Heading from './components/heading';
import UserList from './components/UserList';

const Home = () => {
    return (
        <Heading>
            <GlobalGeneratedStats />
            <UserList />
        </Heading>
    );
};

export default Home;
