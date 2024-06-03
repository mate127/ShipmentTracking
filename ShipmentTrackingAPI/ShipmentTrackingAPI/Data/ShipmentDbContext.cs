using Microsoft.EntityFrameworkCore;
using ShipmentTrackingAPI.Models;

namespace ShipmentTrackingAPI.Data
{
    public class ShipmentDbContext : DbContext
    {
        public ShipmentDbContext(DbContextOptions<ShipmentDbContext> options) : base(options) { }

        public DbSet<Shipment> Shipments { get; set; }
    }
}
