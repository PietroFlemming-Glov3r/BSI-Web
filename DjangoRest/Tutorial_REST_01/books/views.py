from django.shortcuts import render

# Create your views here.

# books/views.py
from django.views.generic import ListView 
from .models import Book 

class BookListView(ListView):
   model = Book 
   template_name = 'book_list.html'
   context_object_name = 'all_books_list'