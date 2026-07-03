public class BookService {

    private BookRepository bookRepository = new BookRepository();

    public void showBookDetails() {
        bookRepository.displayBook();
    }

}
