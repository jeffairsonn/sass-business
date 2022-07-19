import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Heading from './components/heading';
import UserList from './components/UserList';

const Home = () => {
    return (
        <Heading>
            <UserList />
        </Heading>
    );
};

export default Home;
