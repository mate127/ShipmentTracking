namespace ShipmentTrackingAPI.Models
{
    public class Shipment
    {
        public string Id { get; set; }
        public string Carrier { get; set; }
        public string TrackingCode { get; set; }
        public string CarrierTrackingUrl { get; set; }
        public DateTime TrackingDate { get; set; }
        public string Status { get; set; }
        public DateTime StatusChangeDate { get; set; }
        public string StatusChangeReason { get; set; }
        public float Weight { get; set; }
        public DateTime EstimatedDeliveryDate { get; set; }
        public string AddressFrom { get; set; }
        public string AddressTo { get; set; }
        public string Order { get; set; }
        public string RelatedCustomer { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
