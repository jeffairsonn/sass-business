import React from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, FilterIcon } from '@heroicons/react/solid';

const filters = {
    price: [
        { value: '0', label: '$0 - $25', checked: false },
        { value: '25', label: '$25 - $50', checked: false },
        { value: '50', label: '$50 - $75', checked: false },
        { value: '75', label: '$75+', checked: false },
    ],
    color: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
    ],
    size: [
        { value: 'xs', label: 'XS', checked: false },
        { value: 's', label: 'S', checked: true },
        { value: 'm', label: 'M', checked: false },
        { value: 'l', label: 'L', checked: false },
        { value: 'xl', label: 'XL', checked: false },
        { value: '2xl', label: '2XL', checked: false },
    ],
    category: [
        {
            value: 'all-new-arrivals',
            label: 'All New Arrivals',
            checked: false,
        },
        { value: 'tees', label: 'Tees', checked: false },
        { value: 'objects', label: 'Objects', checked: false },
        { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
        { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
    ],
};

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
];

const products = [
    {
        id: 1,
        name: 'Basic Tee 8-Pack',
        href: '#',
        price: '$256',
        description:
            'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
        options: '8 colors',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
        imageAlt:
            'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description:
            'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description:
            'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description:
            'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description:
            'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
        imageAlt: 'Front of plain black t-shirt.',
    },
    // More products...
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Filter = () => {
    return (
        <div className="bg-white">
            <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                    Mes Cr??ations
                </h1>
                {/* <p className="mt-4 max-w-xl mx-auto text-base text-gray-500">
                The secret to a tidy desk? Don t get rid of anything, just
                put it in really really nice looking containers.
            </p> */}
            </div>

            {/* Filters */}
            <Disclosure
                as="section"
                aria-labelledby="filter-heading"
                className="relative z-10 border-t border-b border-gray-200 grid items-center"
            >
                <h2 id="filter-heading" className="sr-only">
                    Filters
                </h2>
                <div className="relative col-start-1 row-start-1 py-4">
                    <div className="max-w-7xl mx-auto flex space-x-6 divide-x divide-gray-200 text-sm px-4 sm:px-6 lg:px-8">
                        <div>
                            <Disclosure.Button className="group text-gray-700 font-medium flex items-center">
                                <FilterIcon
                                    className="flex-none w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                />
                                2 Filters
                            </Disclosure.Button>
                        </div>
                        <div className="pl-6">
                            <button type="button" className="text-gray-500">
                                Clear all
                            </button>
                        </div>
                    </div>
                </div>
                <Disclosure.Panel className="border-t border-gray-200 py-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6">
                            <fieldset>
                                <legend className="block font-medium">
                                    Price
                                </legend>
                                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                    {filters.price.map((option, optionIdx) => (
                                        <div
                                            key={option.value}
                                            className="flex items-center text-base sm:text-sm"
                                        >
                                            <input
                                                id={`price-${optionIdx}`}
                                                name="price[]"
                                                defaultValue={option.value}
                                                type="checkbox"
                                                className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                defaultChecked={option.checked}
                                            />
                                            <label
                                                htmlFor={`price-${optionIdx}`}
                                                className="ml-3 min-w-0 flex-1 text-gray-600"
                                            >
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend className="block font-medium">
                                    Color
                                </legend>
                                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                    {filters.color.map((option, optionIdx) => (
                                        <div
                                            key={option.value}
                                            className="flex items-center text-base sm:text-sm"
                                        >
                                            <input
                                                id={`color-${optionIdx}`}
                                                name="color[]"
                                                defaultValue={option.value}
                                                type="checkbox"
                                                className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                defaultChecked={option.checked}
                                            />
                                            <label
                                                htmlFor={`color-${optionIdx}`}
                                                className="ml-3 min-w-0 flex-1 text-gray-600"
                                            >
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>
                        <div className="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6">
                            <fieldset>
                                <legend className="block font-medium">
                                    Size
                                </legend>
                                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                    {filters.size.map((option, optionIdx) => (
                                        <div
                                            key={option.value}
                                            className="flex items-center text-base sm:text-sm"
                                        >
                                            <input
                                                id={`size-${optionIdx}`}
                                                name="size[]"
                                                defaultValue={option.value}
                                                type="checkbox"
                                                className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                defaultChecked={option.checked}
                                            />
                                            <label
                                                htmlFor={`size-${optionIdx}`}
                                                className="ml-3 min-w-0 flex-1 text-gray-600"
                                            >
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend className="block font-medium">
                                    Category
                                </legend>
                                <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                    {filters.category.map(
                                        (option, optionIdx) => (
                                            <div
                                                key={option.value}
                                                className="flex items-center text-base sm:text-sm"
                                            >
                                                <input
                                                    id={`category-${optionIdx}`}
                                                    name="category[]"
                                                    defaultValue={option.value}
                                                    type="checkbox"
                                                    className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                    defaultChecked={
                                                        option.checked
                                                    }
                                                />
                                                <label
                                                    htmlFor={`category-${optionIdx}`}
                                                    className="ml-3 min-w-0 flex-1 text-gray-600"
                                                >
                                                    {option.label}
                                                </label>
                                            </div>
                                        )
                                    )}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </Disclosure.Panel>
                <div className="col-start-1 row-start-1 py-4">
                    <div className="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Menu as="div" className="relative inline-block">
                            <div className="flex">
                                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                        className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <Menu.Item key={option.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={option.href}
                                                        className={classNames(
                                                            option.current
                                                                ? 'font-medium text-gray-900'
                                                                : 'text-gray-500',
                                                            active
                                                                ? 'bg-gray-100'
                                                                : '',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        {option.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </Disclosure>
        </div>
    );
};

const GeneratedImage = () => {
    return (
        <>
            <Filter />
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                            >
                                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                                    />
                                </div>
                                <div className="flex-1 p-4 space-y-2 flex flex-col">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        <a href={product.href}>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {product.description}
                                    </p>
                                    <div className="flex-1 flex flex-col justify-end">
                                        <p className="text-sm italic text-gray-500">
                                            {product.options}
                                        </p>
                                        <p className="text-base font-medium text-gray-900">
                                            {product.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GeneratedImage;
