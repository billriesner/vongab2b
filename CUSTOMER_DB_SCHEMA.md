# Vonga Customer Database Schema

## Recommended Column Structure

The Customer Database Google Sheet ("Vonga_Customer_DB") should have the following columns in this exact order:

### Column Structure

| Column | Name | Description | Example |
|--------|------|-------------|---------|
| A | **Company Name** | Full legal or commonly used company name | "Acme Fashion Co." |
| B | **Website** | Primary website URL | "https://acmefashion.com" |
| C | **Description** | 2-3 sentence overview: what they do, who they serve, stage/scale | "Sustainable fashion brand serving Gen Z consumers. Founded 2020, Series A, 50 employees. Known for eco-friendly materials and D2C model." |
| D | **Industry/Sector** | Primary industry or market sector | "Sustainable Fashion / E-commerce" |
| E | **Company Stage** | Growth stage or company size | "Series A, 50 employees" |
| F | **Strategic Angle** | Specific, detailed narrative of how Vonga helps them | "Vonga enables Acme to create tangible connection experiences for their eco-conscious Gen Z customers during product launches, addressing their need to build deeper brand loyalty beyond transactional relationships." |
| G | **Key Contact Name** | Decision maker name (CMO, Brand Director, Founder, etc.) | "Sarah Johnson, CMO" |
| H | **Contact Info** | Email, LinkedIn URL, or contact method | "sarah@acmefashion.com" or "linkedin.com/in/sarahjohnson" |
| I | **Market Position** | How they compare to competitors, unique positioning | "Leading sustainable fashion brand in Pacific Northwest. Differentiated by transparent supply chain and community-driven approach." |
| J | **Recent Signals** | Growth signals, strategic moves, timing indicators | "Expanding to 5 new cities Q1 2025. Recently rebranded. Launching new product line targeting corporate partnerships." |
| K | **Research Date** | Date when research was conducted/updated | "2024-12-29" |
| L | **Notes** | Additional insights, risks, opportunities, or context | "Strong focus on community engagement. Partnership with local universities. Potential objection: budget constraints for brand partnerships." |

### Column Headers (Row 1)

The first row should contain these exact headers:

```
Company Name | Website | Description | Industry/Sector | Company Stage | Strategic Angle | Key Contact Name | Contact Info | Market Position | Recent Signals | Research Date | Notes
```

### Important Notes

1. **Column Order is Critical**: The tools expect columns in this exact order (A through L)
2. **Row 1 Must Be Headers**: The first row should always be the header row
3. **All Fields Required**: When saving/updating, all fields should be provided (use empty string "" if information is not available)
4. **Strategic Angle Depth**: Column F (Strategic Angle) should contain specific, detailed narratives - not generic statements
5. **Recent Signals**: Column J should capture what makes this company interesting RIGHT NOW - growth signals, strategic moves, timing indicators

### Updating Existing Records

When updating records, provide all 12 fields. If a field doesn't need to change, provide the existing value. The `update_customer_db` tool replaces the entire row.

### Reading Records

The `read_customer_db` tool reads rows starting from row 1 (headers) by default. To read just data rows, start from row 2.
