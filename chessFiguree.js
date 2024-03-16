const chessFigures = [
  {
    title: 'პაიკი',
    imageUrl: 'img/Chess Pieces (1).svg',
    description:
      'პაიკი ყველაზე სუსტი,მაგრამ უშიშარი მებრძოლია.იგი მოძრაობს მხოლოდ ვერტიკალურად ერთ უჯრაზე, საწყისი პოზიციიდან კი ერთ ან ორ უჯრაზე გადადის. პაიკს უკან სვლა არ შეუძლია. თეთრი პაიკები განლაგებულია 2 ჰორიზონტალზე, ხოლო შავები 7 ჰორიზონტალზე. პაიკი მეტოქის ფიგურას კლავს დიაგონალურად წინ ერთ უჯრაზე, მარცხნივ ან მარჯვნივ. პაკს აქვს ბევრი კარგი თვისება, ესენია: 1) გავლაზე აყვანა, 2) ფიგურის გაცოცხლება. გავლაზე აყვანა შეიძლება მხოლოდ მეტოქის პაიკის ორ უჯრაზე გადაადგილების საპასუხო სვლით. მომდევნო სვლიდან გავლაზე აყვანა აღარ შეიძლება. თეთრ პაიკს გავლაზე აყვანის უფლება აქვს მხოლოდ მაშინ, როდესაც ის მეხუთე ჰორიზონტალზე იმყოფება. შავებს პაიკის გავლაზე აყვანა მხოლოდ მეოთხე ჰორიზონტალიდან შეუძლია. როდესაც თეთრი პაიკი მიაღწევს მერვე ჰორიზონტალს,ხოლო შავების პაიკი — პირველს, მაშინ შესაძლებელია პაიკის გაცოცხლება ლაზიერად,ეტლად,კუდ ან მხედრად.',
  },
  {
    title: 'ეტლი',
    imageUrl: 'img/Chess Pieces (2).svg',
    description:
      'სიძლიერით მეორე ფიგურა ლაზიერის შემდეგ. დაახლოებით უდრის ერთ მსუბუქ ფიგურას და 1-2 პაიკს. ჭადრაკის პარტიის დაწყებისას თითოეულ მოთამაშეს ორი ეტლი ჰყავს. პარტიის დასაწყისში ეტლები დგანან a1, h1, a8 და h8 უჯრებზე. ეტლი მოძრაობს ვერტიკალურად და ჰორიზონტალურად უჯრათა ნებისმიერ რაოდენობაზე. მეტოქის ფიგურას იღებს ასევე ვერტიკალურ და ჰორიზონტალურ ხაზებზე.',
  },
  {
    title: 'მხედარი',
    imageUrl: 'img/Chess Pieces (3).svg',
    description:
      'მსუბუქი ფიგურა. სიძლიერით დაახლოებით კუს ან სამი პაიკის ტოლფასი. ჭადრაკის პარტიის დაწყებისას თითოეულ მოთამაშეს ორი მხედარი ჰყავს. პარტიის დასაწყისში მხედრები დგანან b1, g1, b8 და g8 უჯრებზე. მხედარი ერთადერთი ფიგურაა რომელსაც შეუძლია გადაახტეს როგორც თავის, ასევე მეტოქის ფიგურებს. მხედრის მოძრაობა შემდეგია, მას შეუძლია გადაადგილდეს ორი კვადრატი ვერტიკალურად და ერთი კვადრატი ჰორიზონტალურად, ან ორი კვადრატი ჰორიზონტალურად და ერთი კვადრატი ვერტიკალურად.',
  },
  {
    title: 'კუ',
    imageUrl: 'img/Chess Pieces (4).svg',
    description:
      'მსუბუქი ფიგურა. კუ სიძლიერით დაახლოებით მხედრის ან სამი პაიკის ტოლფასია. ჭადრაკის პარტიის დაწყებისას თითოეულ მოთამაშეს ორი კუ ჰყავს. პარტიის დასაწყისში კუები დგანან c1, f1, c8 და f8 უჯრებზე. ამ ოთხი კუდან ორი თეთრუჯრედოვანი და ორიც შავუჯრედოვანი კუა. კუ მოძრაობს უჯრების ნებისმიერ რაოდენობაზე მხოლოდ იმ ფერის დიაგონალებზე, რას ფერის უჯრაზეც დგას.',
  },
  {
    title: 'ლაზიერი',
    imageUrl: 'img/Chess Pieces (5).svg',
    description:
      'ჭადრაკის ყველაზე ძლიერი ფიგურა. ჭადრაკის პარტიის დაწყებისას თითოეულ მოთამაშეს ერთი ლაზიერი აქვს. ლაზიერები დგანან d1 და d8 უჯრებზე. ლაზიერი დაახლოებით ორი ეტლის ან სამი მსუბუქი (მხედარი, კუ) ფიგურის ტოლფასია. თამაშის მსვლელობისას ლაზიერს შეუძლია ვერტიკალურად, ჰორიზონტალურად და დიაგონალურად ნებისმიერი რაოდენობის უჯრაზე გადაადგილება იმ პირობით, თუ მის გზაზე სხვა ფიგურა არ დგას. ასევე ყველა მიმართულებით შეუძლია აიყვანოს მეტოქის ნებისმიერი ფიგურა.',
  },
  {
    title: 'მეფე',
    imageUrl: 'img/Chess Pieces (6).svg',
    description:
      'ჭადრაკში მთავარი ფიგურა არის მეფე და მისი დატყვევება, ე. ი. დაშამათება, თამაშის დამთავრებას ნიშნავს. იგებს ის, ვინც მოახერხებს მოწინააღმდეგის მეფის დაშამათებას. მეფის სვლები, სხვა ფიგურებთან შედარებით, ძალზე შეზღუდულია. მას შეუძლია გადაადგილდეს ნებისმიერ მეზობელ უჯრაზე.',
  },
];

// data chessFigures.js

document.addEventListener('DOMContentLoaded', function () {
  const chessFiguresContainer = document.getElementById(
    'chessFiguresContainer'
  );

  // Generate chess cards dynamically
  chessFigures.forEach((figure) => {
    const card = document.createElement('div');
    card.classList.add('chess-card');
    card.innerHTML = `
      <img src="${figure.imageUrl}" alt="${figure.title}" />
      <div class="figure-card-text">
        <h1 class="figure-title">${figure.title}</h1>
        <p class="figur-text">${figure.description}</p>
      </div>
    `;
    chessFiguresContainer.appendChild(card);
  });
});