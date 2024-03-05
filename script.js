// Ambil elemen ul dengan id profile-list
var profileList = document.getElementById('profile-list');

// Buat array yang berisi data profil
var profileData = {
    Name: 'Nakano Miku',
    Birthday: 'May 5, 2000',
    Age: '24',
    Gender: 'Female',
    Weight: '50 kg',
    Height: '165 cm',
    'Hair Color': 'Pearl pink',
    'Eye Color': 'Blue',
    'Blood Type': 'A'
};

// Iterasi melalui data profil dan tambahkan ke dalam daftar
for (var key in profileData) {
    var listItem = document.createElement('li');
    var strong = document.createElement('strong'); // Buat elemen strong
    strong.textContent = key; // Teks nama
    listItem.appendChild(strong); // Tambahkan elemen strong ke dalam elemen li

    listItem.innerHTML += ': ' + profileData[key]; // Tambahkan nilai atribut

    profileList.appendChild(listItem);
}
