"use client";

import MovieCardList from "components/movie-card-list";
import FavoriteMovieList from "../components/favorite-movie-card-list";

export default function UI() {
    return (
        <main className="mt-16">
            <div className="min-h-screen bg-gray-100 p-8">
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">찜한 영화</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <FavoriteMovieList />
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">영화 목록</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <MovieCardList />
                </div>
            </section>
        </div>
        </main>
    );
}