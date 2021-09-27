function Student(id, name, subjects = []) {
this.id = id;
this.name = name;
this.subjects = subjects;  
}

Student.prototype.addSubject = function(subject) {
this.subjects = [...this.subjects, subject];   
}

const student1 = new Student(1, 'Reed');

student1.addSubject('Math');
console.log(student1.subjects);



function Book(id, title, author, themes=[]) {
	this.id = id,
	this.title = title,
	this.author = author,
    this.themes = themes
}
 const chk = new Book(1, 'Ladies', 'Myles')
 console.log(chk);

Book.prototype.addTheme = function(theme)
{
    this.themes = [...this.themes, theme]
}

chk.addTheme('Mylesmu')
console.log(chk)

class Film {
	constructor(film, id, title, director, releaseYear, genres = []){
		this.film = film;
		this.id = id;
		this.director = director;
		this.releaseYear = releaseYear;
        this.title = title;
        this.genres = genres;
	}
	addGenres(tit){
		return this.genres = [...this.genres, tit]
	}
}
const res = new Film('jennifer', 1, 'omotola','diary', 'Funke' )
console.log(res)
res.addGenres('jennerdiary')
console.log(res)

