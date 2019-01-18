namespace contact_app.Models {
    public class Application {
        public int Id { get; set; }
        public string ClientID { get; set; }
        public string ClientName { get; set; }
        public string ClientUri { get; set; }
        public string Secret { get; set; }
        public string RedirectUri { get; set; }
        public string PostLogoutRedirectUri { get; set; }

    }
}