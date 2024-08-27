export function flagCode(flag_language) {
    const langToFlag = {
        en: 'gb',
        hi: 'in',
        ja: 'jp',
        ko: 'kr',
        zh: 'cn',
    }

    return langToFlag[flag_language] || flag_language ;
};

export function ratingsStars(stars_vote) {
    const fullStars = Math.round(stars_vote / 2)
    const emptyStars = 5 - fullStars

    const arrayFullStars = Array(fullStars).fill('<i class="bi bi-star-fill"></i>').join('')
    const arrayEmptyStars = Array(emptyStars).fill('<i class="bi bi-star"></i>').join('')

    return arrayFullStars + arrayEmptyStars
}