class Musician {
  constructor(albumsUrl) {
    this.albumsUrl = albumsUrl;
  }

  async getAlbums() {
    const albums = await fetch(this.albumsUrl);
    const albumsParse = await albums.json();
    return albumsParse;
  }
}

const musician = new Musician('https://jsonplaceholder.typicode.com/albums');

musician.getAlbums().then(albums => console.log(albums));
