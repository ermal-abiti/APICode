namespace Domain
{
  public class ListingRating
  {
    public int Id { get; set; }
    public int Value { get; set;}
    public int TotalRaters { get; set; }
    public double AverageRating { get; set;}

    public int ListingId { get; set; }
    public Listing Listing { get; set; }

    public int UserId { get; set; }
    public User User {get;set;}
  }
}
