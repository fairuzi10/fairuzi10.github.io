---
title: "Inheritance Tanpa OOP"
date: "2020-04-11"
description: Masih berpikir bahwa inheritance hanya dapat dilakukan dengan OOP? Baca pos ini dan ubah pemikiran tersebut.
tags: ["SoftwareEngineering", "RandomFact"]
thumbnail: "cover.png"
lang: id
---

Minggu ini, DDP 2 yang merupakan matkul asdosan saya memasuki materi _inheritance_ dan _polymorphism_.
Materi ini membuat saya teringat akan fakta unik yang saya baca dari buku [Clean Architecture karya Robert C. Marthin "Uncle Bob"](https://www.goodreads.com/book/show/18043011-clean-architecture).
_Inheritance_ yang merupakan salah satu pilar _Object Oriented Programming (OOP)_ rupanya bukan merupakan monopoli oleh OOP itu sendiri.
Hal ini menarik bagi saya karena bahkan saya baru tahu _inheritance_ ketika belajar OOP.
Lalu seperti apa jadinya _inheritance_ tanpa OOP? Mari kita lihat.

Mari gunakan bahasa C sehingga menyerupai kondisi dahulu ketika bahasa yang cukup *high level* adalah C dan tidak mendukung OOP.
Ingat bahwa enkapsulasi data di C menggunakan tipe data yang disebut _struct_.
Jika familiar dengan _struct_ pada C++, _struct_ pada C sedikit berbeda, misalnya tidak bisa membuat _method_ sehingga OOP memang tidak didukung.

Anggap kita memiliki sebuah struktur data `Point`.
Kita memiliki sebuah fungsi `distance` yang dapat mengukur jarak antara dua `Point`.
```C
#include <math.h>

struct Point {
  double x, y;
};

double distance(struct Point* p1, struct Point* p2) {
  double delta_x = p1->x - p2->x;
  double delta_y = p1->y - p2->y;
  return sqrt(delta_x * delta_x + delta_y * delta_y);
}
```

Lalu kita ingin membuat sebuah `Point` namun dengan nama. Mari kita buat _struct_ `NamedPoint`.
```C
struct NamedPoint {
  double x, y;
  char* name;
};
```
Perhatikan bahwa `NamedPoint` pada bahasa _object-oriented_ seharusnya dideklarasikan _inherit_ dari `Point`, namun pada contoh ini tidak dilakukan demikian karena bahasa C tidak mendukung OOP.

Dengan _inheritance_ pada OOP, kita tahu bahwa kita dapat menggunakan _method_ dari _superclass_.
Pada kasus ini, kita berharap bisa menggunakan fungsi `distance` milik `Point` pada `NamedPoint`.
Apakah bisa kita menggunakan fungsi `distance` pada `NamedPoint`? Rupanya bisa!
```C
struct NamedPoint* makeNamedPoint(double x, double y, char* name) {
  struct NamedPoint *p = malloc(sizeof(struct NamedPoint));
  p->x = x;
  p->y = y;
  p->name = name;
  return p;
}

int main(int argc, char* argv[]) {
  struct NamedPoint* pointOne = makeNamedPoint(0, 0, "pointOne");
  struct NamedPoint* pointTwo = makeNamedPoint(3, 4, "pointTwo");
  double distOneTwo = distance((struct Point*) pointOne, (struct Point*) pointTwo);
  printf("distance=%f\n", distOneTwo);
}
```

Ternyata, `NamedPoint` bisa diubah menjadi `Point`!
Perubahan ini disebut juga _upcasting_ yang pada OOP tidak perlu dilakukan secara eksplisit.
_Upcasting_ ini dapat berhasil karena urutan atribut `x` dan `y` pada `Point` dan `NamedPoint` sama.
Hal ini lah yang dilakukan _coder_ untuk menggunakan _inheritance_ sebelum bahasa _object-oriented_ muncul.

Walau ternyata bisa melakukan _inheritance_, namun jelas cara ini kurang menyenangkan karena harus menjaga urutan atribut dan melakukan _upcasting_ secara manual.
Tapi tetap saja, fakta ini cukup unik karena ternyata _inheritance_ tidak diciptakan oleh OOP.
Kira-kira, OOP hanya "mengamankan" implementasi _inheritance_ sehingga kita tidak perlu melakukan kesalahan seperti salah urutan atribut yang rentan dilakukan pada cara tradisional ini.

<hr class="section-divider" />

Sekian pos singkat nan random ini. Tentu masih banyak hal _magic_ yang saya baru tahu dari buku ini. OOP saja bahkan masih banyak yang belum saya bahas di tulisan ini, misalnya _encapsulation_ dan _polymorphism_. Silakan baca buku ini di bab 5 jika tertarik untuk belajar lebih lanjut :stuck_out_tongue_closed_eyes:.
