using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class Listings1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Listing_Users_UserId",
                table: "Listing");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Listing",
                table: "Listing");

            migrationBuilder.RenameTable(
                name: "Listing",
                newName: "Listings");

            migrationBuilder.RenameIndex(
                name: "IX_Listing_UserId",
                table: "Listings",
                newName: "IX_Listings_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Listings",
                table: "Listings",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Listings_Users_UserId",
                table: "Listings",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Listings_Users_UserId",
                table: "Listings");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Listings",
                table: "Listings");

            migrationBuilder.RenameTable(
                name: "Listings",
                newName: "Listing");

            migrationBuilder.RenameIndex(
                name: "IX_Listings_UserId",
                table: "Listing",
                newName: "IX_Listing_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Listing",
                table: "Listing",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Listing_Users_UserId",
                table: "Listing",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
