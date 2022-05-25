import React from 'react';

const Blogs = () => {
    return (
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-12">

            <div class="card bg-base-100 shadow-xl px-5 py-5">
                <h1 className='text-2xl '>How will you improve the performance of a React Application?</h1>
                <p className='py-5 px-5'>
                    UI আপডেট করার জন্য প্রয়োজনীয় ব্যয়বহুল DOM ক্রিয়াকলাপগুলির সংখ্যা কমানোর জন্য প্রতিক্রিয়া বেশ কয়েকটি চতুর কৌশল ব্যবহার করে। অনেক অ্যাপ্লিকেশানের জন্য, রিঅ্যাক্ট ব্যবহার করলে কর্মক্ষমতার জন্য বিশেষভাবে অপ্টিমাইজ করার জন্য বেশি কাজ না করে একটি দ্রুত ইউজার ইন্টারফেসের দিকে নিয়ে যাবে। তবুও, আপনার প্রতিক্রিয়া অ্যাপ্লিকেশনের গতি বাড়ানোর বিভিন্ন উপায় রয়েছে। সমস্ত এক্সটেনশনগুলি সাময়িকভাবে অক্ষম করুন, বিশেষ করে প্রতিক্রিয়া বিকাশকারী সরঞ্জামগুলি, কারণ তারা বিশ্লেষণের ফলাফলের সাথে বিশৃঙ্খলা করতে পারে৷ ছদ্মবেশী মোডে আপনার ব্রাউজার চালিয়ে আপনি সহজেই এক্সটেনশনগুলি অক্ষম করতে পারেন৷

                </p>
            </div>
            <div class="card bg-base-100 shadow-xl px-5 py-5">
                <h1 className='text-2xl '>What are the different ways to manage a state in a React application?</h1>
                <p className='py-5 px-5'>
                    আপনার react অ্যাপগুলিতে আপনাকে সঠিকভাবে পরিচালনা করার জন্য চারটি প্রধান ধরণের state রয়েছে: <br />1.Local state:Local state হল ডেটা যা আমরা এক বা অন্য উপাদানে পরিচালনা করি।
                    Local state প্রায়শই useState হুক ব্যবহার করে React পরিচালিত হয়। <br />
                    2.Global state <br />
                    3.Server state <br />
                    4.URL state <br />

                </p>
            </div>
            <div class="card bg-base-100 shadow-xl px-5 py-5">
                <h1 className='text-2xl '>How does prototypical inheritance work?</h1>
                <p className='py-5 px-5'>
                    প্রোটোটাইপল ইনহেরিট্যান্স হল জাভাস্ক্রিপ্টের একটি বৈশিষ্ট্য যা বস্তুতে পদ্ধতি এবং বৈশিষ্ট্য যোগ করতে ব্যবহৃত হয়। এটি এমন একটি পদ্ধতি যার মাধ্যমে একটি বস্তু অন্য বস্তুর বৈশিষ্ট্য এবং পদ্ধতির উত্তরাধিকারী হতে পারে। ঐতিহ্যগতভাবে, একটি বস্তুর [[প্রোটোটাইপ]] পেতে এবং সেট করার জন্য, আমরা অবজেক্ট ব্যবহার করি। getPrototypeOf এবং অবজেক্ট
                </p>
            </div>
            <div class="card bg-base-100 shadow-xl px-5 py-5">
                <h1 className='text-2xl '>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p className='py-5 px-5'>
                    আপনার সমস্যা হল যে আপনার কার্ট শুধুমাত্র কী-মান জোড়ায় নিম্নলিখিত তথ্য সংরক্ষণ করছে: কী হল পণ্যের নাম, এবং পরিমাণ হল মান। কার্ট অবজেক্টে কোনও মূল্যের তথ্য নেই, তাই এটি কম্পিউট করার জন্য আসল পণ্য অ্যারে সন্ধান করা প্রয়োজন।

                    অধিকন্তু, বাই() ফাংশনের বাইরে গণনা এবং মোট ঘোষণা করা হয়, তবুও ফাংশন, যখন আহ্বান করা হয়, এই মানগুলি আপডেট করে না। এই মানগুলি শুধুমাত্র রানটাইমে সেট করা হয় এবং পরে আপডেট করা হয় না।
                </p>
            </div>
            <div class="card bg-base-100 shadow-xl px-5 py-5">
                <h1 className='text-2xl '>What is a unit test? Why should write unit tests?</h1>
                <p className='py-5 px-5'>
                    ইউনিট পরীক্ষার মূল উদ্দেশ্য হল লিখিত কোড আলাদা করে পরীক্ষা করা এবং নির্ধারণ করা যে এটি উদ্দেশ্য অনুযায়ী কাজ করে কিনা। ইউনিট টেস্টিং উন্নয়ন প্রক্রিয়ার একটি গুরুত্বপূর্ণ পদক্ষেপ, কারণ সঠিকভাবে করা হলে, এটি কোডের প্রাথমিক ত্রুটিগুলি সনাক্ত করতে সাহায্য করতে পারে যা পরবর্তী পরীক্ষার পর্যায়ে খুঁজে পাওয়া আরও কঠিন হতে পারে।
                </p>
            </div>
        </div>
    );
};

export default Blogs;