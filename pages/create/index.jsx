import React from 'react';
import Heading from '../components/Heading';

import {
    AcademicCapIcon,
    BadgeCheckIcon,
    CashIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
} from '@heroicons/react/outline';

const actions = [
    {
        title: 'Style Transfer',
        href: '#',
        icon: ClockIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
        description:
            'Demandez ce que vous souhaitez à notre intelligence artificielle, il vous génèrera ce que vous vous lui demandez. Soyez précis et découvrez la magie ',
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const CreateContent = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Content image
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Image sur laquelle vous souhaitez appliquer une
                            texture
                        </p>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Content image
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    className="sr-only"
                                                />
                                            </label>
                                            <p className="pl-1">
                                                or drag and drop
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-3 md:gap-6 mt-10">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Style image
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Style à appliquer sur votre image
                        </p>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Style image
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    className="sr-only"
                                                />
                                            </label>
                                            <p className="pl-1">
                                                or drag and drop
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Description
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Décrivez votre création et dite ce que cela dégage
                            pour vous
                        </p>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form className="space-y-6" action="#" method="POST">
                            <div className="space-y-1">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nom de l&apos;œuvre
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="about"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {' '}
                                    Description, inspiration (pas trop long de
                                    préférence){' '}
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows="3"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3"
                                        placeholder="you@example.com"
                                    ></textarea>
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Brief description for your profile.
                                    URL&apos;s are hyperlinked.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Annuler
                </button>
                <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Envoyer
                </button>
            </div>
        </div>
    );
};

const Create = () => {
    return (
        <Heading>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
                            Jeffairson
                        </h2>
                        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Créez quelque chose d&apos;incroyable !
                        </p>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                            Générez, téléchargez, imprimez et vendez vos Œuvres
                            générées. Choisissez parmi l&apos;un de nos procédez
                        </p>
                    </div>
                </div>
            </div>
            <CreateContent />
        </Heading>
    );
};

export default Create;
