CREATE DATABASE Quanlynhansu
USE Quanlynhansu
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Menu](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TenMenu] [nvarchar](250) NOT NULL,
	Icon [nvarchar](250) NOT NULL,
	link [nvarchar](250) NOT NULL,
	[TrangThai] [bit] NOT NULL,
 CONSTRAINT [PK_Menu] PRIMARY KEY CLUSTERED 
(
	Id ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
SET QUOTED_IDENTIFIER ON
GO
/**/
CREATE TABLE [dbo].[LoaiHD](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Tenloai] [nvarchar](250) NOT NULL,
	[ngayhieuluc] datetime NOT NULL,
	
 CONSTRAINT [PK_LoaiHD] PRIMARY KEY CLUSTERED 
(
	Id ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
SET QUOTED_IDENTIFIER ON
GO
/**/
CREATE TABLE [dbo].[HopDong](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[MaLHD] int NULL,
	[SoHD] [nvarchar](250) NULL,
	
	 [TenLHD] [nvarchar](250) NULL,
	 [Phanloai] [nvarchar](250) NULL,
	 [Trangthai] [nvarchar](250) NULL,
	 [Ngayky] datetime NULL,
	[Ngayhieuluc] datetime NULL,
 CONSTRAINT [PK_Hopdong] PRIMARY KEY CLUSTERED 
(
	Id ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
SET QUOTED_IDENTIFIER ON
GO
/**/

SELECT phongban.tenpb ,COUNT(nhanvien.id) as Soluong
        FROM phongban,Tonhoms ,nhanvien
        WHERE Tonhoms.idpb=phongban.id
        AND Tonhoms.id=nhanvien.idtn
                GROUP BY phongban.tenpb

/**/
CREATE TABLE [dbo].[Danhhieuthidua](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Manv] int NULL,
	[Mapb] int NULL,
	[SoQD] [nvarchar](250) NULL,
	
	 [Chucvu] [nvarchar](250) NULL,
	 [Danhhieu] [nvarchar](250) NULL,
	 [Trangthai] [nvarchar](250) NULL,
	 [Ngayky] datetime NULL,
	[Namthidua] datetime NULL,
 CONSTRAINT [PK_Danhhieuthidua] PRIMARY KEY CLUSTERED 
(
	Id ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
SET QUOTED_IDENTIFIER ON
GO
select * from kiemtras
/**/
CREATE TABLE [dbo].[Khenthuong](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Manv] varchar(50) NULL,
	[Mapb] int NULL,
	[SoQD] [nvarchar](250) NULL,
	
	 [Chucvu] [nvarchar](250) NULL,
	 [Khenthuong] [nvarchar](250) NULL,
	 [HTKT] [nvarchar](250) NULL,
	 [Trangthai] [nvarchar](250) NULL,
	 [Ngayky] datetime NULL,
	[Namthidua] datetime NULL,
 CONSTRAINT [PK_Khenthuong] PRIMARY KEY CLUSTERED 
(
	Id ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
SET QUOTED_IDENTIFIER ON
GO
/***/
CREATE TABLE [dbo].[Baocaocongviec](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[idnv] varchar(50) NULL,
	Thu int NULL,
	Noidung [nvarchar](max) NULL,
	Ngay datetime NULL,
	
 CONSTRAINT [PK_Baocaocongviec] PRIMARY KEY CLUSTERED 
(
	Id ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[chinhanh](
	[Id] [int] IDENTITY(1,1)NOT Null,
	[tencn] [nvarchar](255) NULL,
	diachi [nvarchar](255) NULL,
	email [nvarchar](255) NULL,
	sdt [nvarchar](15) NULL,
 CONSTRAINT [PK_chinhanh] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[userss](
	[Id] [varchar](50)NOT Null,
	[name] [nvarchar](255) NULL,
	[email] [nvarchar](255) NULL,
	[sdt] [nvarchar](15) NULL,
	[diachi] [nvarchar](255) NULL,
	[gioitinh] [nvarchar](11) NULL,
	[taikhoan] [varchar](255) NULL,
	[Password] [varchar](100) NULL,
	[role] [varchar](100) NULL,
	[token] [nvarchar](100) NULL,
 CONSTRAINT [PK_userss] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderDetail]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[phongban](
	[Id] [varchar](50)NOT Null,
	
  idcn int NOT NULL,
  tenpb nvarchar(255) NOT NULL,
  sdtpb nvarchar(15) NOT NULL,
  trangthai nvarchar(255) NOT NULL,
 CONSTRAINT [PK_phongban] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
select* from kiemtras where idnv=
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bacluong](
	[Id] [int] IDENTITY(1,1),
  idnv int NULL,
  bacluong int NULL,
  hesoluong int NULL
 
 CONSTRAINT [PK_bacluong] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Phucap](
	[Id] [int] IDENTITY(1,1),
  idnv int NULL,
  Tenphucap nvarchar(255) NULL,

  heso int NULL,
  Sotien int NULL
 
 CONSTRAINT [PK_Phucap] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[lichsuchuyento](
	[Id] [int] IDENTITY(1,1)NOT Null,
	[idnv] int NULL,
	Tocu int NULL,
	Tomoi int NULL,
	Ngaychuyen datetime NULL,
 CONSTRAINT [PK_lichsuchuyento] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[miennhiem](
	[Id] [int] IDENTITY(1,1)NOT Null,
	[idnv] int NULL,
	chucvucu nvarchar(255) NULL,
	chucvumoi nvarchar(255) NULL,
	Ngaychuyen datetime NULL,
	Ngayhieuluc datetime NULL,
 CONSTRAINT [PK_miennhiem] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dieudong](
	[Id] [int] IDENTITY(1,1)NOT Null,
	[idnv] int NULL,
    phongbancu nvarchar(255) NULL,
	phongbanmoi nvarchar(255) NULL,
	Ngaychuyen datetime NULL,
	Ngayhieuluc datetime NULL,
 CONSTRAINT [PK_dieudong] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bonhiem](
	[Id] [int] IDENTITY(1,1)NOT Null,
	[idnv] int NULL,
	chucvucu nvarchar(255) NULL,
	chucvumoi nvarchar(255) NULL,
	Ngaychuyen datetime NULL,
	Ngayhieuluc datetime NULL,
 CONSTRAINT [PK_bonhiem] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Trinhdo](
	[Id] [int] IDENTITY(1,1)NOT Null,
	[idnv] int NULL,
	chucvucu nvarchar(255) NULL,
	chucvumoi nvarchar(255) NULL,
	Ngaychuyen datetime NULL,
	Ngayhieuluc datetime NULL,
 CONSTRAINT [PK_bonhiem] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tonhoms](
	[Id] [varchar](50)NOT Null,
	idpb [varchar](50) NOT NULL,
  tentn nvarchar(255) NOT NULL,
  trangthai nvarchar(255) NOT NULL,
 CONSTRAINT [PK_Tonhoms] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


CREATE TABLE [dbo].[nvvaomuon](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	 idnv int NOT NULL,
  ngay date DEFAULT NULL,
  giovao time DEFAULT NULL,
  Lydovaomuon text NOT NULL,
  trangthaicheckin int DEFAULT NULL,
 CONSTRAINT [PK_nvvaomuon] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
CREATE TABLE [dbo].[nvrasom](
	[Id] [int] IDENTITY(1,1)NOT Null,
	 idnv int NOT NULL,
  ngay date DEFAULT NULL,
  giora time DEFAULT NULL,
  Lydorasom text NOT NULL,
  trangthaicheckout int DEFAULT NULL,
 CONSTRAINT [PK_nvrasom] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[kiemtras](
  [Id] [int] IDENTITY(1,1)NOT Null,
  idnv varchar(50),
  ngay datetime Not NULL,
  giovao datetime  NULL,
  giora datetime  NULL,
  thang datetime   NULL,
 Lydovaomuon nvarchar(max) NULL,
 trangthaivaomuon int NULL,
 Lydorasom nvarchar(max) NULL,
 trangthairasom int NULL,
  Hople int Not NULL,
  Hoten nvarchar(255) Null,
  Sogio int NULL

  
 CONSTRAINT [PK_kiemtras] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
CREATE TABLE Luongnv (
 [Id] [int] IDENTITY(1,1)NOT Null,
  idnv varchar(50) NULL,
  ngayconghople int DEFAULT NULL,
  ngaycongkohople int DEFAULT NULL,
  ngaykhongduoctinh int DEFAULT NULL,
  thang int DEFAULT NULL,
   thuong float DEFAULT Null,
   phat float DEFAULT Null,
  phucap int DEFAULT Null,
  luongthang float DEFAULT NULL,
  luongnhandc float DEFAULT NULL,
  nguoixuly nvarchar(250) DEFAULT NULL,
CONSTRAINT [PK_luong] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE Time (
 [Id] [int] IDENTITY(1,1)NOT Null,
  Giovao datetime   NULL,
  Giora datetime  NULL,
  
CONSTRAINT [PK_time] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Lylichtrichngang](
 [Id] varchar(50) NOT Null,
  idnv varchar(50) Not NULL,
  Matk varchar(50) NULL,
  hoten nvarchar(255) NULL,
  ngaysinh datetime NULL,
  email nvarchar(255) NULL,
  sdt nvarchar(15) NULL,
  diachi nvarchar(255) NULL,
  chucvu nvarchar(255) NULL,
  gioitinh nvarchar(11) NULL,
   Quoctich nvarchar(255) NULL,
  Dantoc nvarchar(200) NULL,
  Tongiao nvarchar(200) NULL,
  Sonha nvarchar(200) NULL,
  Masobaohiem nvarchar(200) NULL,
  Hotencha nvarchar(200) NULL,
  Namsinh datetime NULL,
  Quoctichb nvarchar(200) NULL,
  Dantocb nvarchar(200) NULL,
  Tongiaob nvarchar(200) NULL,
  Nghenghiepcha nvarchar(200) NULL,
  Sdtcha nvarchar(200) NULL,
  Hokhauthuongtrub nvarchar(200) NULL,
  Hotenme nvarchar(200) NULL,
  Namsinhm datetime NULL,
  Quoctichm nvarchar(200) NULL,
  Dantocm nvarchar(200) NULL,
  Tongiaom nvarchar(200) NULL,
  Hokhauthuongtrum nvarchar(200) NULL,
  Slae int NULL,
   CONSTRAINT [PK_lilichtrichngang] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/***/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Congviec](
 [Id] varchar(50),
  idnv int not NULL,
   idpb int not NULL,
   idtn int not NULL,
  ngaythuviec datetime NULL,
  ngaychinhthuc datetime NULL,
  donvi nvarchar(255) NULL,
  chucvu nvarchar(15) NULL,
  kiemnhiem nvarchar(255) NULL,
  vitri nvarchar(255) NULL,
  sotruong nvarchar(500) NULL,
   danhhieu nvarchar(255) NULL,
  khenthuong nvarchar(200) NULL,
  kyluat nvarchar(200) NULL,
 
  ngaythoatly datetime NULL,
  Ngaybienche datetime NULL,
 
   CONSTRAINT [PK_Congviec] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Trinhdo](
 [Id] varchar(50),
  idnv int not NULL,
  
  Hocham nvarchar(255) NULL,
  Hocvi nvarchar(255) NULL,
  Chuyennganh nvarchar(255) NULL,
  Chuyenmon nvarchar(255) NULL,
  Ngoaingu nvarchar(255) NULL,
  Tinhoc nvarchar(255) NULL,
  Vanbangkhac nvarchar(255) NULL,
  ghichu nvarchar(255) NULL,
 
 
   CONSTRAINT [PK_Trinhdo] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
 /**/
 
/****** Object:  Table [dbo].[Role]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Nhanvien](
	[Id] varchar(50) Not Null,
	idtk varchar(50)  NULL,
  idtn int  NULL,
  hoten nvarchar(255)  NULL,
  email nvarchar(255)  NULL,
  sdt nvarchar(15)  NULL,
  diachi nvarchar(255)  NULL,
  chucvu nvarchar(255)  NULL,
  gioitinh nvarchar(11)  NULL,
  luongthoathuan int  NULL,
  Hinhanh nvarchar(Max)  NULL
 CONSTRAINT [PK_Nhanvien] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE lichsuchuyento 
ADD SoQD NVARCHAR (255) NULL;
ALTER TABLE lichsuchuyento 
ADD Ngayhieuluc datetime NULL;
ALTER TABLE Lylichtrichngang 
ADD Hinhanh VARCHAR (255) NULL;
ALTER TABLE HopDong 
ADD Manv int NULL;
ALTER TABLE HopDong 
ADD Masothue int NULL;
ALTER TABLE HopDong 
ADD Mabl int NULL;
ALTER TABLE HopDong 
ADD Luuythue int NULL;
ALTER TABLE HopDong 
ADD bacluong int NULL;
ALTER TABLE HopDong 
ADD ngayhethan datetime NULL;
ALTER TABLE Phucap
ADD SoQD NVARCHAR(255) NULL;
ALTER TABLE Phucap
ADD ngayky datetime NULL;
ALTER TABLE Phucap 
ADD ngayhethan datetime NULL;
ALTER TABLE bacluong 
ADD ngayky datetime NULL;
ALTER TABLE bacluong 
ADD ngayhieuluc datetime NULL;
ALTER TABLE lichsuchuyento
ADD Nguoiky nvarchar(255) NULL;
ALTER TABLE lichsuchuyento
ADD ngayhieuluc datetime NULL;
ALTER TABLE miennhiem
ADD Nguoiky nvarchar(255) NULL;
ALTER TABLE dieudong
ADD Nguoiky nvarchar(255) NULL;
ALTER TABLE bacluong 
ADD SoQD NVARCHAR(255) NULL;
ALTER TABLE Lylichtrichngang 
ADD Matk VARCHAR(50) NULL;
ALTER TABLE kiemtras 
ADD Hoten VARCHAR(255) NULL;
ALTER TABLE bacluong 
ADD hesoluong2 NVARCHAR(10) NULL;
/****** Object:  Table [dbo].[Users]    Script Date: 6/10/2021 5:27:19 PM ******/
ALTER TABLE [dbo].[phongban]  WITH CHECK ADD  CONSTRAINT [fk_chinhanh] FOREIGN KEY([idcn])
REFERENCES [dbo].[chinhanh] ([Id])
GO
ALTER TABLE [dbo].[tonhoms]  WITH CHECK ADD  CONSTRAINT [fk_tonhom] FOREIGN KEY([idpb])
REFERENCES [dbo].[phongban] ([Id])
GO
ALTER TABLE [dbo].[nhanvien]  WITH CHECK ADD  CONSTRAINT [fk_nhanvien] FOREIGN KEY([idtn])
REFERENCES [dbo].[Tonhoms] ([Id])
GO
ALTER TABLE [dbo].[bacluong]  WITH CHECK ADD  CONSTRAINT [fk_bacluong] FOREIGN KEY([idnv])
REFERENCES [dbo].[nhanvien] ([Id])
GO
ALTER TABLE [dbo].[kiemtras]  WITH CHECK ADD  CONSTRAINT [fk_kiemtras] FOREIGN KEY([idnv])
REFERENCES [dbo].[userss] ([Id])
GO
ALTER TABLE Tinhluong  WITH CHECK ADD  CONSTRAINT [fk_luong] FOREIGN KEY([idnv])
REFERENCES [dbo].[nhanvien] ([Id])
GO
ALTER TABLE lichsuchuyento  WITH CHECK ADD  CONSTRAINT [fk_lichsuchuyento] FOREIGN KEY([idnv])
REFERENCES [dbo].[nhanvien] ([Id])
GO
ALTER TABLE [dbo].[Lylichtrichngang] WITH CHECK ADD  CONSTRAINT [fk_lylichtrichngang] FOREIGN KEY([idnv])
REFERENCES [dbo].[nhanvien] ([Id])
GO
ALTER TABLE [dbo].[nvvaomuon]  WITH CHECK ADD  CONSTRAINT [fk_nvvm] FOREIGN KEY([idnv])
REFERENCES [dbo].[nhanvien] ([Id])
GO
ALTER TABLE [dbo].[nvrasom]  WITH CHECK ADD  CONSTRAINT [fk_nvrs] FOREIGN KEY([idnv])
REFERENCES [dbo].[nhanvien] ([Id])

ALTER TABLE [dbo].[userss]  WITH CHECK ADD  CONSTRAINT [fk_us] FOREIGN KEY([idnv])
REFERENCES [dbo].[nhanvien] ([Id])
ALTER TABLE [dbo].[Baocaocongviec]  WITH CHECK ADD  CONSTRAINT [fk_Baocaocongviec] FOREIGN KEY([idnv]) 
REFERENCES [dbo].[userss] ([Id])

INSERT INTO userss(idnv,name, email, sdt, diachi,taikhoan,Password,role,token) VALUES
('17',N'Admin','	admin@gmail.com',	'0333823775',	N'Thanh Hà - H?i D??ng',	'admin@gmail.com'	,'16092001'	,N'Quan tri du an',	N'Quantri');
INSERT INTO chinhanh (tencn,diachi,SDT,email) VALUES
(N'T?p ?oàn b?u chính vi?n thông Vi?t Nam VN', N'Tòa nhà VNPT - Media (8 t?ng),s? 57A, Hu?nh Thúc Kháng, ph??ng Láng H?, qu?n ??ng ?a, Hà N?i', '0358629576', 'vnpt@gmail.com'),
('VTPT IT ', N'C?u Gi?y,Hà N?i', '0327859864', 'vnptit@gmail.com');

INSERT INTO phongban (idcn, tenpb, sdtpb, trangthai) VALUES
(1, N'Phòng HC - NS', '0599983773', N'Ho?t ??ng'),
(1, N'Phòng K? Toán', '0599988780', N'Ho?t ??ng'),
(2, N'Phòng D? Án', '0599977521', N'Ho?t ??ng'),
(2, N'Phòng Kinh Doanh', '0588900329', N'Ho?t ??ng'),
(2, N'Phòng QL K? Thu?t', '0533348894', N'Ho?t ??ng');


ALTER TABLE userss

DROP CONSTRAINT fk_us;

ALTER TABLE Lylichtrichngang ALTER COLUMN Id int IDENTITY(1,1)NOT Null;
ALTER TABLE Luongnv ALTER COLUMN matn varchar(50) Null;
ALTER TABLE Menu ALTER COLUMN TrangThai int Null;

ALTER TABLE Nhanvien ALTER COLUMN Hinhanh varchar(max) Null;
ALTER TABLE lichsuchuyento ALTER COLUMN Tomoi nvarchar(255) Null;

ALTER TABLE kiemtras 
ADD Sogio int NULL;

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Thongkeluong]
AS
    BEGIN
       SELECT *
        FROM Thongke where Nam=(YEAR(CONVERT (date,GETDATE())))
       
    END;
GO


INSERT INTO Tonhoms (idpb, tentn, trangthai) VALUES
(1, N'T? Hành Chính', N'Ho?t ??ng'),
(1, N'T? Nhân S?', N'Ho?t ??ng'),
(2, N'Marketing', N'Ho?t ??ng'),
(2, N'T? Giám Sát', N'Ho?t ??ng'),
(3, N'T? Thi Công', N'Ho?t ??ng'),
(3, N'T? B?o Hành', N'Ho?t ??ng'),
(4, N'T? Thi?t K?', N'Ho?t ??ng'),
(5, N'T? XD D? Án', N'Ho?t ??ng'),
(5, N'K? toán', N'Ho?t ??ng');
INSERT INTO Nhanvien (idtn, hoten, email, sdt, gioitinh,diachi, chucvu, luongthoathuan) VALUES
(3, 'min', 'min@gmail.com', '0678956666', 'Nam',N'H?i D??ng', N'Tổng giám đốc', 60000000),
(4, N'Do Van Duy', 'duydo1118@gmail.com', '0333823775', 'Nam',N'H?i D??ng', N'Tr??ng phòng', 45000000),
(5, N'Do Thi Ly', 'doly@gmail.com', '0358697562', N'N?',N'H?i D??ng', N'Nhân viên', 35000000),
(6, N'Do Thi Quynh', 'annhien@gmail.com', '0376419034', N'N?',N'H?i D??ng', N'Tr??ng phòng', 40000000);

INSERT INTO kiemtras (idnv,Hoten,ngay, giovao, giora,thang, Lydovaomuon, Lydorasom, trangthaivaomuon, trangthairasom, Hople) VALUES
('3297F0F2-35D3-4231-919D-1CFCF4035976','Do Thi Quynh','2023-4-01', '08:04:36', '12:27:28','2023-4-01', NULL, NULL, 0, 0, 1),
('3297F0F2-35D3-4231-919D-1CFCF4035976','Do Thi Quynh','2023-4-02', '08:48:14', '16:45:40','2023-4-02', NULL, NULL, 0, 0, 1),
('3297F0F2-35D3-4231-919D-1CFCF4035976','Do Thi Quynh','2023-4-03', '08:49:02', '16:55:43','2023-4-03', NULL, NULL, 0, 0, 0),
('3197F0F2-35D3-4231-919D-1CFCF4035979','Do Huy Hoang','2023-4-01', '08:49:36', '16:50:50','2023-4-01', NULL, NULL, 0, 0, 0),
('3197F0F2-35D3-4231-919D-1CFCF4035979','Do Huy Hoang','2023-4-02', '08:04:36', '16:45:44','2023-4-02',N'Bận việc gia đình', NULL, 1, 0, 1),
('3197F0F2-35D3-4231-919D-1CFCF4035979','Do Huy Hoang','2023-4-03', '08:04:36', '16:45:14','2023-4-03',NULL, N'Bận việc gia đình', 0, 1, 1),
('3197F0F2-35D3-4231-919D-1CFCF4035979','Do Huy Hoang','2023-4-01', '08:05:54', '16:55:14','2023-4-01', NULL, NULL, 0, 0, 0),
('3297F0F2-35D3-4231-919D-1CFCF4035977','Do Thi Ly','2023-4-05', '08:10:55', '16:25:14','2023-4-05', NULL, NULL, 0, 0, 0),
('3297F0F2-35D3-4231-919D-1CFCF4035976','Do Thi Quynh','2023-4-04', '08:17:55', '16:55:55','2023-4-04', NULL, NULL, 0, 0, 0),
('3297F0F2-35D3-4231-919D-1CFCF4035977','Do Thi Ly','2023-4-02', '08:01:12', '16:51:12','2023-4-02', NULL, NULL, 0, 0, 0),
('3297F0F2-35D3-4231-919D-1CFCF4035977','Do Thi Ly','2023-4-03', '08:33:13', '15:55:40','2023-4-03', NULL, NULL, 0, 0, 1),
('3297F0F2-35D3-4231-919D-1CFCF4035977','Do Thi Ly','2023-4-04', '08:03:50', '16:53:50','2023-4-04', NULL, NULL, 0, 0, 0);

INSERT INTO userss (idnv, name, email, sdt, diachi, gioitinh, taikhoan, Password, role, token) VALUES
(3 Do Thi Ly doly@gmail.com 0358697562 Hải Dương Nữ doly@gmail.com 07102001 Nhan vien NULL)
(4 min min@gmail.com 0678956666 Hải DươngNữmin@gmail.com123456Nhan vienNULL)
(5 Do Van Duy duydo1118@gmail.com0333823775Hải DươngNamduydo1118@gmail.com16092001Nhan vienNULL)
̣̣̣(6 Do Thi Quy nhannhien@gmail.com0376419034Hải DươngNữannhien@gmail.com12121997Quan tri du anNULL);

/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[LLTN_updates]
(
@id varchar(50),
 @idnv varchar(50) ,
 
 @hoten nvarchar(255) ,
  @ngaysinh datetime ,
  @email nvarchar(255) ,
  @sdt nvarchar(15) ,
  @diachi nvarchar(255) ,
  @chucvu nvarchar(255) ,
  @gioitinh nvarchar(11) ,
   @Quoctich nvarchar(255) ,
  @Dantoc nvarchar(200) ,
  @Tongiao nvarchar(200) ,
  @Sonha nvarchar(200) ,
  @Masobaohiem nvarchar(200) ,
  @Hotencha nvarchar(200) ,
  @Namsinh datetime ,
  @Quoctichb nvarchar(200) ,
  @Dantocb nvarchar(200) ,
  @Tongiaob nvarchar(200) ,
  @Nghenghiepcha nvarchar(200) ,
  @Sdtcha nvarchar(200) ,
  @Hokhauthuongtrub nvarchar(200) ,
  @Hotenme nvarchar(200) ,
  @Namsinhm datetime ,
  @Quoctichm nvarchar(200) ,
  @Dantocm nvarchar(200) ,
  @Tongiaom nvarchar(200) ,
  @Hokhauthuongtrum nvarchar(200) ,
  @Slae int
)
AS
    BEGIN
   update Lylichtrichngang set 
				idnv = @idnv,
			
				hoten = @hoten,
  ngaysinh =@ngaysinh ,
  email  =@email,
  sdt  =@sdt,
  diachi =@diachi, 
  chucvu  =@chucvu,
  gioitinh  =@gioitinh,
   Quoctich  =@Quoctich,
  Dantoc  =@Dantoc,
  Tongiao =@Tongiao, 
  Sonha  =@Sonha,
  Masobaohiem  =@Masobaohiem,
  Hotencha =@Hotencha, 
  Namsinh  =@Namsinh,
  Quoctichb =@Quoctichb, 
  Dantocb  =@Dantocb,
  Tongiaob  =@Tongiaob,
  Nghenghiepcha=@Nghenghiepcha,  
  Sdtcha  =@Sdtcha,
  Hokhauthuongtrub  =@Hokhauthuongtrub,
  Hotenme  =@Hotenme,
  Namsinhm  =@Namsinhm,
  Quoctichm =@Quoctichm, 
  Dantocm =@Dantocm, 
  Tongiaom  =@Tongiaom,
  Hokhauthuongtrum  =@Hokhauthuongtrum,
  Slae  =@Slae
  
				where Id = @id;
			 
        SELECT '';
    END;

	
GO



SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Thongkenhanvienphongban]
AS
    BEGIN
       SELECT phongban.tenpb,COUNT(nhanvien.id) as Soluong
        FROM phongban,Tonhoms,nhanvien
        WHERE Tonhoms.idpb=phongban.id 
        AND Tonhoms.id=nhanvien.idtn 
        GROUP BY phongban.tenpb
    END;
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[test_createss]
(@id   varchar(50),
 @hoten          nvarchar(255),
 @email         nvarchar(255) ,
 @sdt         nvarchar(15) ,
 @diachi         nvarchar(255) ,
 @gioitinh         nvarchar(11) ,
 @taikhoan         varchar(255) ,
 @password        varchar(100)  ,
 @role          varchar(100) ,
  @token          varchar(100) 
)
AS
    BEGIN
        INSERT INTO userss
                (Id,
				  name, 
                         email, 
                         sdt,
						 diachi,
						 gioitinh,
						 taikhoan,
						 Password,
						 role   ,
						 token
                )
                VALUES
                (               @id,
								@hoten, 
								 @email, 
								 @sdt,
								 @diachi,
								 @gioitinh,
								 @taikhoan,
								 @password,
								 @role  ,
								 @token
                );
               
                    BEGIN
                        INSERT INTO Nhanvien
                        (
						id,
						idtk,
						 hoten, 
						 email,
						 diachi,
						 gioitinh,
						 sdt 
						 
                        )
                                               VALUES
(  
							   @id,
                                         @id, 
									     @hoten,
										  @email,
										  @diachi,
										  @gioitinh,
										  @sdt
										
                                      
                               ) ;
							 
                    BEGIN
                        INSERT INTO Lylichtrichngang
                        (
						id,
					   	Matk,
						idnv,
						 hoten,
						  email  ,
						  sdt ,
						  diachi , 
						  gioitinh 
						  
                        )
					        VALUES(   
							      @id,
									@id,
									@id,
									 @hoten,
								  @email,
								   @sdt,
								  @diachi,
								  @gioitinh)
								 
                               ;
				END;
				SELECT '';
                END;
        SELECT '';
    END;
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[chinhanh_get_by_id](@chinhnhanh_id int)
AS
    BEGIN
        SELECT *
        FROM chinhanh as chinhanh
      where  chinhanh.Id = @chinhnhanh_id;
    END;
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_all_bacluong]
AS
    BEGIN
        SELECT * 
        FROM bacluong END;
GO
SET ANSI_NULLS ON
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_all_Danhhieuthidua]
AS
    BEGIN
        SELECT * 
        FROM Danhhieuthidua END;
GO
SET ANSI_NULLS ON
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_all_Hopdong]
AS
    BEGIN
        SELECT * 
        FROM HopDong END;
GO
SET ANSI_NULLS ON
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_all_Congviec]
AS
    BEGIN
        SELECT * 
        FROM Congviec END;
GO
SET ANSI_NULLS ON
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_all_Phucap]
AS
    BEGIN
        SELECT * 
        FROM Phucap END;
GO
SET ANSI_NULLS ON
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_all_Khenthuong]
AS
    BEGIN
        SELECT * 
        FROM Khenthuong
		END;
GO
SET ANSI_NULLS ON
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_all_Trinhdo]
AS
    BEGIN
        SELECT * 
        FROM Trinhdo END;
GO
SET ANSI_NULLS ON
GO
/**/

/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_by_idkiemtra](@chinhnhanh_id int)
AS
    BEGIN
        SELECT * 
        FROM chinhanh as chinhanh
      where  chinhanh.Id = @chinhnhanh_id;
    END;
GO 
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_by_id_nhanvienss](@id varchar(50))
AS
    BEGIN
        SELECT * 
        FROM Nhanvien
      where  Id = @id;
    END;
GO 
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_by_id_nhanvien](@idtk varchar(50))
AS
    BEGIN
        SELECT * 
        FROM Nhanvien
      where  idtk = @idtk;
    END;
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_by_id_tonhomss](@id varchar(50))
AS
    BEGIN
        SELECT * 
        FROM Tonhoms
      where  Id = @id;
    END;
GO 
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_by_id_tonhom_pbs](@idpb varchar(50))
AS
    BEGIN
        SELECT * 
        FROM Tonhoms
      where  idpb = @idpb;
    END;
GO 
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_by_id_tonhomnv](@matn varchar(50))
AS
    BEGIN
        SELECT * 
        FROM Nhanvien
      where  idtn = @matn;
    END;
GO 
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_by_id_phongbans](@id int)
AS
    BEGIN
        SELECT * 
        FROM phongban
      where  Id = @id;
    END;
GO 
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_by_id_LSCTs](@id int)
AS

    BEGIN
        SELECT * 
        FROM lichsuchuyento
      where  Id = @id;
    END;
GO 
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_by_idDanhhieus](@danhhieu varchar(50))
AS
    BEGIN
        SELECT * FROM Danhhieuthidua 
      where  Manv = @danhhieu
    END;
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_by_idkhenthuongs](@khenthuong varchar(50))
AS
    BEGIN
        SELECT * FROM Khenthuong 
      where  Manv = @khenthuong
    END;
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_by_idHopdongs](@hopdong varchar(50))
AS
    BEGIN
        SELECT * FROM HopDong 
      where  Manv = @hopdong
    END;
GO
/**/
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[get_by_idcongviecs](@congviec varchar(50))
AS
    BEGIN
        SELECT * FROM Congviec 
      where  idnv = @congviec
    END;
GO
/**/
CREATE PROCEDURE [dbo].[nhanvien_get_by_id](@idnv varchar(50))
AS
    BEGIN
        SELECT * 
        FROM Baocaocongviec 
      where  idnv = @idnv;
    END;
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/**/
CREATE PROCEDURE [dbo].[get_by_id_Phucaps](@idnv varchar(50))
AS
    BEGIN
        SELECT * 
        FROM Phucap 
      where  idnv = @idnv;
    END;
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/**/
create Proc [dbo].[getcheck]
@id varchar(50)
as
begin
	SELECT*FROM kiemtras WHERE kiemtras.idnv=@idnv AND MONTH(ngay)=(MONTH(CONVERT (date,GETDATE())))
                        
end SELECT (MONTH(CONVERT (date,GETDATE())))
GO

GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_by_id_LLTNNV]
@idnv varchar(50)
as
begin
	SELECT*FROM  Lylichtrichngang WHERE Lylichtrichngang.Matk=@idnv
                         
end
GO

SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_by_id_nhanvien]
@idtk varchar(50)
as
begin
	SELECT*FROM  Nhanvien WHERE idtk=@idtk
                         
end
GO
/****** Object:  StoredProcedure [dbo].[create_customer]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[create_chinhanh]
@customer_tencn nvarchar(255),
@customer_diachi nvarchar(255),
@customer_email nvarchar(255),
@customer_sdt nvarchar(15)
as
begin
insert into chinhanh(tencn,diachi,email,sdt)
values(@customer_tencn,@customer_diachi,@customer_email,@customer_sdt)
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[create_Congviecs]
@idnv varchar(50),
@idpb int,
@idtn int,
@ngaythuviec datetime,
@ngaychinhthu datetime,
@donvi nvarchar(255),
@chucvu nvarchar(255),
@kiemnhiem nvarchar(255),
@vitri nvarchar(255),
@sotruong nvarchar(500),
@danhhieu nvarchar(255),
@khenthuong nvarchar(200),
@kyluat nvarchar(200),
@ngaythoatly datetime,
@ngaybienche datetime
as
begin
insert into Congviec(idnv,idpb,idtn,ngaythuviec,ngaychinhthuc,donvi,chucvu,kiemnhiem,vitri,sotruong,danhhieu,khenthuong,kyluat,ngaythoatly,Ngaybienche)
values(@idnv,@idpb,@idtn,@ngaythuviec,@ngaychinhthu,@donvi,@chucvu,@kiemnhiem,@vitri,@sotruong,@danhhieu,@khenthuong,@kyluat,@ngaythoatly,@ngaybienche)
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[create_Danhhieuthiduass]
@idnv varchar(50),
@idpb varchar(50),
@SoQD nvarchar(250),
@chucvu nvarchar(250),
@Danhhieu nvarchar(250),
@trangthai nvarchar(250),
@ngayky datetime,
@namthidua datetime
as
begin
insert into Danhhieuthidua(Manv,Mapb,SoQD,Chucvu,Danhhieu,Trangthai,Ngayky,Namthidua)
values(@idnv,@idpb,@SoQD,@chucvu,@Danhhieu,@trangthai,@ngayky,@namthidua)
end
GO
/**/
ALTER TABLE HopDong ALTER COLUMN Luuythue NVARCHAR (255);
ALTER TABLE HopDong ALTER COLUMN Masothue NVARCHAR (255);
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[create_Hopdongs]
@idnv varchar(50),
@idlhd int,

@SoQD nvarchar(250),
@Phanloai nvarchar(250),
@trangthai nvarchar(250),
@ngayky datetime,
@ngayhieuluc datetime,
@Luuythue nvarchar(255),
@Masothue nvarchar(255),
@ngayhethan datetime
as
begin
insert into HopDong(Manv,MaLHD,SoHD,Phanloai,Trangthai,Ngayky,Ngayhieuluc,Luuythue,Masothue,ngayhethan)
values(@idnv,@idlhd,@SoQD,@Phanloai,@trangthai,@ngayky,@ngayhieuluc,@Luuythue,@Masothue,@ngayhethan)
end
GO
/**/
create proc [dbo].[create_Khenthuongss]
@idnv varchar(50),
@idpb varchar(50),
@SoQD nvarchar(250),
@chucvu nvarchar(250),
@Khenthuong nvarchar(250),
@HTKhenthuong nvarchar(250),
@trangthai nvarchar(250),
@ngayky datetime,
@namthidua datetime
as
begin
insert into Khenthuong(Manv,Mapb,SoQD,Chucvu,Khenthuong,HTKT,Trangthai,Ngayky,Namthidua)
values(@idnv,@idpb,@SoQD,@chucvu,@Khenthuong,@HTKhenthuong,@trangthai,@ngayky,@namthidua)
end
GO
/**/
create proc [dbo].[create_Phucaps]
@idnv varchar(50),
@SoQD nvarchar(250),
@Tenphucap nvarchar(250),
@sotien int,
@ngayky datetime,
@ngayhieuluc datetime
as
begin
insert into Phucap(idnv,SoQD,Tenphucap,Sotien,ngayky,ngayhieuluc)
values(@idnv,@SoQD,@Tenphucap,@sotien,@ngayky,@ngayhieuluc)
end
GO
/**/
create proc [dbo].[create_Trinhdos]
@idnv varchar(50),
@Hocham nvarchar(255),
@Hocvi nvarchar(255),
@Chuyennganh nvarchar(255),
@Chuyenmon nvarchar(255),
@Ngoaingu nvarchar(255),
@Tinhoc nvarchar(255),
@Vanbangkhac nvarchar(255),
@ghichu nvarchar(255)
as
begin
insert into Trinhdo(idnv,Hocham,Hocvi,Chuyennganh,Chuyenmon,Ngoaingu,Tinhoc,Vanbangkhac,ghichu)
values(@idnv,@Hocham,@Hocvi,@Chuyennganh,@Chuyenmon,@Ngoaingu,@Tinhoc,@Vanbangkhac,@ghichu)
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[create_baocaos]
@idnv varchar(50),
@thu int,
@ngay datetime,
@noidung nvarchar(max),
@linkbaocao nvarchar(max)

as
begin
insert into Baocaocongviec(idnv,Thu,Ngay,Noidung,Linkbaocao)
values(@idnv,@thu,@ngay,@noidung,@linkbaocao)
end
GO
/**/
create proc [dbo].[create_miennhiems]
@idnv varchar(50),
@Hoten nvarchar(255),
@soQD nvarchar(255),
@chuvucu nvarchar(255),
@chuvumoi nvarchar(255),
@ngaychuyen datetime,
@ngayhieuluc datetime,
@nguoiky nvarchar(255)
as
begin
insert into miennhiem(idnv,Hoten,SoQD,chucvucu,chucvumoi,Ngaychuyen,ngayhieuluc,Nguoiky)
values(@idnv,@Hoten,@soQD,@chuvucu,@chuvumoi,@ngaychuyen,@ngayhieuluc,@nguoiky)
end
GO
/**/
create proc [dbo].[create_bonhiems]
@idnv varchar(50),
@Hoten nvarchar(255),
@soQD nvarchar(255),
@chuvucu nvarchar(255),
@chuvumoi nvarchar(255),
@ngaychuyen datetime,
@ngayhieuluc datetime,
@nguoiky nvarchar(255)
as
begin
insert into bonhiem(idnv,Hoten,SoQD,chucvucu,chucvumoi,Ngaychuyen,ngayhieuluc,Nguoiky)
values(@idnv,@Hoten,@soQD,@chuvucu,@chuvumoi,@ngaychuyen,@ngayhieuluc,@nguoiky)
end
GO
/**/
create proc [dbo].[create_dieudongs]
@idnv varchar(50),
@Hoten nvarchar(255),
@soQD nvarchar(255),
@phongbancu nvarchar(255),
@phongbanmoi nvarchar(255),
@ngaychuyen datetime,
@ngayhieuluc datetime,
@nguoiky nvarchar(255)
as
begin
insert into dieudong(idnv,Hoten,SoQD,phongbancu,phongbanmoi,Ngaychuyen,ngayhieuluc,Nguoiky)
values(@idnv,@Hoten,@soQD,@phongbancu,@phongbanmoi,@ngaychuyen,@ngayhieuluc,@nguoiky)
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[create_lichsuchuyento]
@idnv varchar(50),
@Hoten nvarchar(255),
@soQD nvarchar(255),
@Tocu nvarchar(255),
@Tomoi nvarchar(255),
@Ngaychuyen datetime,
@ngayhieuluc datetime,
@nguoiky nvarchar(255)
as
begin
insert into lichsuchuyento(idnv,Hoten,SoQD,Tocu,Tomoi,Ngaychuyen,Ngayhieuluc,Nguoiky)
values(@idnv,@Hoten,@soQD,@Tocu,@Tomoi,@Ngaychuyen,@ngayhieuluc,@nguoiky)
end
GO
/****** Object:  StoredProcedure [dbo].[get_all_category]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_LSCT]
@id varchar(50)
as
begin
	select*from lichsuchuyento where idnv=@id
	
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_LSCT]
as
begin
	select*from lichsuchuyento
	
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_LoaiHD]
as
begin
	select*from LoaiHD
	
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_miennhiem]
as
begin
	select*from miennhiem
	
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_bonhiem]
as
begin
	select*from bonhiem
	
end
/**/
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_dieudong]
as
begin
	select*from bonhiem
	
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_by_id_bonhiems]
@bonhiem varchar(50)
as
begin
	select*from bonhiem where idnv=@bonhiem
	
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_by_id_miennhiemss]
@miennhiem varchar(50)
as
begin
	select*from miennhiem where idnv=@miennhiem
	
end
/**/
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_by_id_dieudong]
@idnv int
as
begin
	select*from dieudong where idnv=@idnv
	
end
GO
/**/
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_by_dieudong]
@id int
as
begin
	select*from dieudong where id=@id
	
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_by_idbacluongs]
@idnv varchar(50)
as
begin
	select*from bacluong where idnv=@idnv
	
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_by_phongban1s]
@phongban varchar(50)
as
begin
	select*from phongban where id=@phongban
	
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_by_idtrinhdo]
@trinhdo int
as
begin
	select*from Trinhdo where idnv=@trinhdo
	
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_Trinhdo]
as
begin
	select*from Trinhdo 
	
end
GO
/**/

/**/

/**/
ALTER TABLE bacluong ALTER COLUMN bacluong nvarchar(10) Null;
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[create_bacluongs]
@idnv varchar(50),
@SoQD nvarchar(255),

@bacluong nvarchar(10),
@hesoluong nvarchar(10),
@heso2 nvarchar(10),
@ngayky datetime,
@ngayhieuluc datetime
as
begin
insert into bacluong(idnv,SoQD,bacluong,hesoluong,hesoluong2,ngayky,ngayhieuluc)
values(@idnv,@SoQD,@bacluong,@hesoluong,@heso2,@ngayky,@ngayhieuluc)
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[update_bacluongs]
@Id int,
@idnv varchar(50),
@SoQD nvarchar(255),
@bacluong nvarchar(10),
@hesoluong nvarchar(10),
@heso2 nvarchar(10),
@ngayky datetime,
@ngayhieuluc datetime
as
begin
update bacluong set 
     idnv=@idnv,
          SoQD=@SoQD,
	   bacluong=@bacluong,
	   hesoluong= @hesoluong,
	   hesoluong2=@heso2,
	   ngayky=@ngayky,
	   ngayhieuluc=@ngayhieuluc
	where Id = @Id;
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[update_Congviecs]
@Id int,
@idpb int,
@idtn int,
@ngaythuviec datetime,
@ngaychinhthu datetime,
@donvi nvarchar(255),
@chucvu nvarchar(255),
@kiemnhiem nvarchar(255),
@vitri nvarchar(255),
@sotruong nvarchar(500),
@danhhieu nvarchar(255),
@khenthuong nvarchar(200),
@kyluat nvarchar(200),
@ngaythoatly datetime,
@ngaybienche datetime
as
begin
update Congviec set 
         idpb=@idpb,
		 idtn=@idtn,
		 ngaythuviec=@ngaythuviec,
		 ngaychinhthuc=@ngaychinhthu,
		 donvi=@donvi,
		 chucvu=@chucvu,
		 kiemnhiem=@kiemnhiem,
		 vitri=@vitri,
		 sotruong=@sotruong,
		 danhhieu=@danhhieu,
		 khenthuong=@khenthuong,
		 kyluat=@kyluat,
		 ngaythoatly=@ngaythoatly,
		 Ngaybienche=@ngaybienche
	where Id = @Id;
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[update_luongs]
@Id int,
@idnv varchar(50),
  @ngayhople int,
  @ngaykohople int ,
  @ngaykhongduoctinh int ,
  @thang int ,
   @phucap int,
  @thuong float,
  @phat float,
 @luongthang float,
 @luongnhandc float,
 @nguoixuly nvarchar(250)
as
begin
update Luongnv set 
         idnv=@idnv,
		 ngayconghople=@ngayhople,
		 ngaycongkohople=@ngaykohople,
		 ngaykhongduoctinh=@ngaykhongduoctinh,
		 thang=@thang,
		 thuong=@thuong,
		 phucap=@phucap,
		 phat=@phat,
		 luongthang=@luongthang,
		 luongnhandc=@luongnhandc,
		 nguoixuly=@nguoixuly
		
	where Id = @Id;
end
GO
/***/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[update_Danhhieusss]
@Id int,
@idnv varchar(50),
@idpb varchar(50),
@SoQD nvarchar(255),
@chucvu nvarchar(255),
@danhhieu nvarchar(255),
@trangthai nvarchar(200),
@ngayky datetime,
@Namthidua datetime
as
begin
update Danhhieuthidua set 
         Manv=@idnv,
		 Mapb=@idpb,
		 SoQD=@SoQD,
		 Chucvu=@chucvu,
		 Danhhieu=@danhhieu,
		 
		 Trangthai=@trangthai,
		
		 Ngayky=@ngayky,
		 Namthidua=@Namthidua
	where Id = @Id;
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[update_Hopdongss]
@Id int,
@idnv varchar(50),
@idlhd int,
@SoQD nvarchar(250),
@Phanloai nvarchar(250),
@trangthai nvarchar(250),
@ngayky datetime,
@ngayhieuluc datetime,
@Luuythue nvarchar(255),
@Masothue nvarchar(255),
@ngayhethan datetime
as
begin
update HopDong set 
         Manv=@idnv,
		 MaLHD=@idlhd,
		
		 SoHD=@SoQD,
		
		 Phanloai=@Phanloai,
		 Trangthai=@trangthai,
		 Ngayky=@ngayky,
		 Ngayhieuluc=@ngayhieuluc,
		
		 Luuythue=@Luuythue,
		 Masothue=@Masothue,
		 ngayhethan=@ngayhethan
	where Id = @Id;
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[update_Khenthuongs]
@Id int,
@idnv varchar(50),
@idpb varchar(50),
@SoQD nvarchar(250),
@chucvu nvarchar(250),
@Khenthuong nvarchar(250),
@HTKhenthuong nvarchar(250),
@trangthai nvarchar(250),
@ngayky datetime,
@namthidua datetime
as
begin
update Khenthuong set 
         Manv=@idnv,
		 Mapb=@idpb,
		 SoQD=@SoQD,
		 Chucvu=@chucvu,
		 Khenthuong=@Khenthuong,
		 HTKT=@HTKhenthuong,
		 Trangthai=@trangthai,
		 Ngayky=@ngayky,
		 Namthidua=@namthidua
	where Id = @Id;
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[update_Phucap]
@Id int,
@idnv int,
@SoQD nvarchar(250),
@Tenphucap nvarchar(250),
@sotien int,
@ngayky datetime,
@ngayhieuluc datetime
as
begin
update Phucap set 
         idnv=@idnv,
		 SoQD=@SoQD,
		 Tenphucap=@Tenphucap,
		
		 Sotien=@sotien,	 
		 Ngayky=@ngayky,
		 ngayhieuluc=@ngayhieuluc
	where Id = @Id;
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[update_Trinhdo]
@Id varchar(50),
@idnv varchar(50),
@Hocham nvarchar(255),
@Hocvi nvarchar(255),
@Chuyennganh nvarchar(255),
@Chuyenmon nvarchar(255),
@Ngoaingu nvarchar(255),
@Tinhoc nvarchar(255),
@Vanbangkhac nvarchar(255),
@ghichu nvarchar(255)
as
begin
update Trinhdo set 
         idnv=@idnv,
		 Hocham=@Hocham,
		 Hocvi=@Hocvi,
		 Chuyennganh=@Chuyennganh,
		 Chuyenmon=@Chuyenmon,	 
		 Ngoaingu=@Ngoaingu,
		 Tinhoc=@Tinhoc,
		  Vanbangkhac=@Vanbangkhac,
		   ghichu=@ghichu
	where Id = @Id;
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[update_miennhiemss]
@Id int,
@idnv varchar(50),
@soQD nvarchar(255),
@chucvucu nvarchar(255),
@chucvumoi nvarchar(255),
@ngaychuyen datetime,
@ngayhieuluc datetime,
@nguoiky nvarchar(255)
as
begin
update miennhiem set 
          idnv=@idnv,
          SoQD=@soQD,
	   chucvucu=@chucvucu,
	   chucvumoi= @chucvumoi,
	   Ngaychuyen=@ngaychuyen,
	  Ngayhieuluc=@ngayhieuluc,
	   Nguoiky=@nguoiky
	where Id = @Id;
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[update_dieudong]
@Id int,
@idnv int,
@soQD nvarchar(255),
@chucvucu nvarchar(255),
@chucvumoi nvarchar(255),
@ngaychuyen datetime,
@ngayhieuluc datetime,
@nguoiky nvarchar(255)
as
begin
update dieudong set 
          idnv=@idnv,
          SoQD=@soQD,
	   phongbancu=@chucvucu,
	   phongbanmoi= @chucvumoi,
	   Ngaychuyen=@ngaychuyen,
	  Ngayhieuluc=@ngayhieuluc,
	   Nguoiky=@nguoiky
	where Id = @Id;
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[update_LSCTs]
@Id int,
@idnv varchar(50),
@soQD nvarchar(255),
@Tocu nvarchar(255),
@Tomoi nvarchar(255),
@ngaychuyen datetime,
@ngayhieuluc datetime,
@nguoiky nvarchar(255)
as
begin
update lichsuchuyento set 
          idnv=@idnv,
          SoQD=@soQD,
	   Tocu=@Tocu,
	   Tomoi= @Tomoi,
	   Ngaychuyen=@ngaychuyen,
	  Ngayhieuluc=@ngayhieuluc,
	   Nguoiky=@nguoiky
	where Id = @Id;
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[update_bonhiems]
@Id int,
@idnv varchar(50),
@soQD nvarchar(255),
@chucvucu nvarchar(255),
@chucvumoi nvarchar(255),
@ngaychuyen datetime,
@ngayhieuluc datetime,
@nguoiky nvarchar(255)
as
begin
update bonhiem set 
          idnv=@idnv,
          SoQD=@soQD,
	   chucvucu=@chucvucu,
	   chucvumoi= @chucvumoi,
	   Ngaychuyen=@ngaychuyen,
	  Ngayhieuluc=@ngayhieuluc,
	   Nguoiky=@nguoiky
	where Id = @Id;
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_miennhiem]
@Id int
as
begin
	delete from miennhiem where Id=@Id;
	SELECT '';
end
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_thongkes]
as
begin
	delete from Thongke 
	SELECT '';
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_bonhiem]
@Id int
as
begin
	delete from bonhiem where Id=@Id;
	SELECT '';
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_LSCT]
@Id int
as
begin
	delete from lichsuchuyento where Id=@Id;
	SELECT '';
end
GO
/**/

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_bacluong]
@Id int
as
begin
	delete from bacluong where Id=@Id;
	SELECT '';
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_luongnhanviens]
as
begin
	delete from Luongnv where thang=(MONTH(CONVERT (date,GETDATE())));
	SELECT '';
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_nvvm]
as
begin
	SELECT*FROM  kiemtras
                        WHERE kiemtras.trangthaivaomuon!=0
                         ORDER BY kiemtras.ngay ASC
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_nvrs]
as
begin
	SELECT*FROM  kiemtras
                        WHERE kiemtras.trangthairasom!=0
                         ORDER BY kiemtras.ngay ASC
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[create_Menu]
@TenMenu nvarchar(255),
@Icon nvarchar(255),
@link nvarchar(255),
@trangthai bit
as
begin
insert into Menu(TenMenu,Icon,link,TrangThai)
values(@TenMenu,@Icon,@link,@trangthai)
end
GO
/****** Object:  StoredProcedure [dbo].[create_order]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE proc [dbo].[create_phongbans]
@id varchar(50),
@customer_idcn int,
@customer_tenpb nvarchar(255),
@customer_sdtpb nvarchar(15),
@customer_trangthai nvarchar(255)
as
begin
insert into phongban(id,idcn,tenpb,sdtpb,trangthai)
values(@id,@customer_idcn,@customer_tenpb,@customer_sdtpb,@customer_trangthai);
 
end
GO


/****** Object:  StoredProcedure [dbo].[create_orderdetail]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[create_tonhoms]
@id varchar(50),
@idpb int,
@tentn nvarchar(255),
@trangthai nvarchar(255)
as 
begin
insert into Tonhoms(id,idpb,tentn,trangthai)
values(@id,@idpb,@tentn,@trangthai);
select ''
end
GO
/***********************************/
CREATE Proc [dbo].[create_nhanviensss]
@id varchar(50),
@idtk varchar(50),
@idtn varchar(50),
@idpb varchar(50),
@hoten Nvarchar(255),
@email nvarchar(255),
@diachi nvarchar(255),
@sdt nvarchar(15),
@chucvu nvarchar(255),
@Hinhanh nvarchar(255),
@gioitinh nvarchar(11),
@luongthoathuan int
as
begin
	insert Nhanvien(id,idtk,idtn,idpb,hoten,email,sdt,diachi,chucvu,Hinhanh,gioitinh,luongthoathuan)
	values(@id,@idtk,@idtn,@idpb,@hoten,@email,@sdt,@diachi,@chucvu,@Hinhanh,@gioitinh,@luongthoathuan);
	 BEGIN
      INSERT  Lylichtrichngang
                        (
						id,		
						Matk,
						idnv,
						 hoten,
						  email  ,
						  sdt ,
						  diachi , 
						  gioitinh 
						  
                        )
					        VALUES(   
							      @id,
								@idtk,
									@id,
									 @hoten,
								  @email,
								   @sdt,
								  @diachi,
								  @gioitinh)
								 
                               ;
							   SELECT '';
				END;
				
	SELECT '';
end
GO

CREATE Proc [dbo].[create_kiemtra]
  @idnv varchar(50),
  @hoten nvarchar(255),
  @ngay datetime,
  @giovao datetime ,
  @giora datetime ,
  @Lydovaomuon nvarchar(max),
 @trangthaivaomuon int,
 @Lydorasom nvarchar(max),
 @trangthairasom int,
 @Hople int,
 @Sogio int

as
begin
	insert kiemtras(idnv,Hoten,ngay,giovao,giora,Lydovaomuon,Lydorasom,trangthaivaomuon,trangthairasom,Hople,Sogio)
	values(@idnv,@hoten,@ngay,@giovao,@giora,@Lydovaomuon,@Lydorasom,@trangthaivaomuon,@trangthairasom,@Hople,@Sogio);
	SELECT '';
end
GO
CREATE Proc [dbo].[create_nvvaomuon]
  @idnv varchar(50),
  @ngay date,
  @giovao time ,
 @Lydovaomuon nvarchar(max),
 @trangthaivaomuon int
as
begin
	insert nvvaomuon(idnv,ngay,giovao,Lydovaomuon,trangthaicheckin)
	values(@idnv,@ngay,@giovao,@Lydovaomuon,@trangthaivaomuon);
	SELECT '';
end
GO
CREATE Proc [dbo].[create_nvrasom]
  @idnv varchar(50),
  @ngay date,
  @giora time ,
 @Lydorasom nvarchar(max),
 @trangthairasom int
as
begin
	insert nvrasom(idnv,ngay,giora,Lydorasom,trangthaicheckout)
	values(@idnv,@ngay,@giora,@Lydorasom,@trangthairasom);
	SELECT '';
end
GO
/****** Object:  StoredProcedure [dbo].[delete_category]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_chinhanh]
@Id int
as
begin
	delete from chinhanh where Id=@Id;     
	
	SELECT '';
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_phongbans]
@Id varchar(50)
as
begin
	delete from phongban where Id=@Id;
	SELECT '';
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_Congviec]
@Id varchar(50)
as
begin
	delete from Congviec where Id=@Id;
	SELECT '';
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_danhhieu]
@Id int
as
begin
	delete from Danhhieuthidua where Id=@Id;
	SELECT '';
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_hopdong]
@Id int
as
begin
	delete from HopDong where Id=@Id;
	SELECT '';
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_khenthuong]
@Id int
as
begin
	delete from Khenthuong where Id=@Id;
	SELECT '';
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_phucap]
@Id int
as
begin
	delete from Phucap where Id=@Id;
	SELECT '';
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_Trinhdo]
@Id varchar(50)
as
begin
	delete from Trinhdo where Id=@Id;
	SELECT '';
end
GO
/**/

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_tonhoms]
@Id varchar(50)
as
begin
	delete from Tonhoms where Id=@Id;
	SELECT '';
end
GO
/**/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_dieudong]
@Id int
as
begin
	delete from Tonhoms where Id=@Id;
	SELECT '';
end
GO
/***/

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_nhanvienss]
@Id varchar(50)
as

   begin
	delete from Lylichtrichngang where Lylichtrichngang.Id= @Id;
	begin
	delete from Nhanvien where Nhanvien.id=@Id;

	SELECT '';
	end
	SELECT '';
   end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_kiemtra]
@Id varchar(50)
as
begin
	delete from kiemtras where Id=@Id;
	SELECT '';
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Proc [dbo].[delete_luong]
@Id int
as
begin
	delete from Tinhluong where Id=@Id;
	SELECT '';
end
GO

/****** Object:  StoredProcedure [dbo].[get_all_category]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_chinhanh]
as
begin
	select*from chinhanh
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_menu_c]
as
begin
	select*from Menu where TrangThai='0'
end
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_menu_p]
as
begin
	select*from Menu where TrangThai='1'
end
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_menu_p1]
as
begin
	select*from Menu where TrangThai='2'
end
GO
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_menu_p2]
as
begin
	select*from Menu where TrangThai='3'
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_luong]
as
begin
	select*from Luongnv WHERE thang = MONTH(CONVERT (date,GETDATE()))
end
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_luong_Q1]
as
begin
	select*from Luongnv WHERE thang=1 or thang=2 or thang=3
end
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_luong_Q2]
as
begin
	select*from Luongnv WHERE thang=4 or thang=5 or thang=6
end
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_luong_Q3]
as
begin
	select*from Luongnv WHERE thang=7 or thang=8 or thang=9
end
GO
create Proc [dbo].[get_all_luong_Q4]
as
begin
	select*from Luongnv WHERE thang=10 or thang=11 or thang=12
end
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[get_all_time]
as
begin
	select*from Times
end
GO
/****** Object:  StoredProcedure [dbo].[get_all_product]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[get_all_phongban]
as
begin
	select phongban.Id,phongban.idcn,chinhanh.tencn,phongban.tenpb,phongban.sdtpb,phongban.tenpb,phongban.trangthai FROM phongban,chinhanh WHERE phongban.idcn=chinhanh.Id
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_all_tonhom] 
	as
	begin
	SELECT Tonhoms.Id,phongban.tenpb,Tonhoms.tentn,Tonhoms.trangthai FROM Tonhoms LEFT JOIN phongban on Tonhoms.idpb=phongban.Id
	ORDER BY Id DESC
		/*SELECT tonhom.id,tonhom.idpb,tonhom.tentn,phongban.tenpb,tonhom.trangthai 
                        FROM phongban,tonhom
                       WHERE tonhom.idpb=phongban.id  
                        AND tonhom.trangthai = '0' 
                        AND phongban.trangthai = '0' 
                        ORDER BY phongban.tenpb ASC*/
	end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_all_nhanvien] 
	as
	begin
		--SELECT nhanvien.Id,nhanvien.idtn,phongban.tenpb,Tonhoms.tentn,nhanvien.hoten,nhanvien.email,nhanvien.sdt,nhanvien.gioitinh,nhanvien.diachi,nhanvien.chucvu,nhanvien.luongthoathuan
  --                      FROM Tonhoms,nhanvien,phongban
  --                       WHERE Tonhoms.idpb=phongban.id
  --                      AND nhanvien.idtn=Tonhoms.id 
  --                      ORDER BY Nhanvien.chucvu ASC
  SELECT*FROM Nhanvien
	end
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_all_kiemtra] 
	as
	begin
	/*select*from kiemtras where MONTH(ngay)= (MONTH(GETDATE())) */
	SELECT*FROM kiemtras WHERE MONTH(ngay)=(MONTH(CONVERT (date,GETDATE())))
		/*SELECT kiemtra.id,kiemtra.idnv,kiemtra.ngay,kiemtra.giovao,kiemtra.giora,
                        nhanvien.hoten, nhanvien.gioitinh,datediff(HOUR,kiemtra.giovao , kiemtra.giora ) as Tong,kiemtra.Lydovaomuon,kiemtra.Lydorasom,kiemtra.Hople
                        FROM 
                        kiemtra,nhanvien
                        WHERE 
                        kiemtra.idnv=nhanvien.id 
                        ORDER BY kiemtra.ngay ASC*/
	end
GO
create proc [dbo].[getkiemtraid] 
@idnv varchar(50)
	as
	begin 
	SELECT TOP 1 *FROM kiemtras where idnv=@idnv ORDER BY ngay DESC ;	
	end
	select *from kiemtras
GO
create proc [dbo].[getluongid] 
@idnv varchar(50)
	as
	begin 
	SELECT TOP 1 *FROM Luongnv where idnv=@idnv ORDER BY thang DESC ;	
	end
	
GO
create proc [dbo].[getnvtg] 
	as
	begin 
	SELECT *FROM Luongnv where ngayconghople > 0 and thang=(MONTH(CONVERT (date,GETDATE())))
	end
	
GO
create proc [dbo].[getnvttg] 
	as
	begin 
	SELECT *FROM Luongnv where ngaycongkohople > 0 and thang=(MONTH(CONVERT (date,GETDATE())))
	end
GO
create proc [dbo].[getnvcc] 
	as
	begin 
	SELECT *FROM Luongnv where ngaykhongduoctinh > 0 and thang=(MONTH(CONVERT (date,GETDATE())))
	end
	
GO
create proc [dbo].[get_id] 
@idnv varchar(50)
	as
	begin 
	SELECT*FROM Luongnv where idnv=@idnv ORDER BY thang ASC ;	
	end
	
GO
create proc [dbo].[getbaocaoid] 
@idnv varchar(50)
	as
	begin 
	SELECT TOP 1 *FROM Baocaocongviec where idnv=@idnv ORDER BY ngay DESC ;	
	end
	
GO

create proc [dbo].[getkiemtracheck] 
@idnv varchar(50)
	as
	begin 
	SELECT*FROM kiemtras where idnv=@idnv AND MONTH(ngay)=(MONTH(CONVERT (date,GETDATE()))) ;	
	end
	select *from kiemtras
GO
create proc [dbo].[getkiemtracheckdg] 
@idnv varchar(50)
	as
	begin 
	SELECT*FROM kiemtras where idnv=@idnv AND Hople=0 AND MONTH(ngay)=(MONTH(CONVERT (date,GETDATE()))) ;	
	end
	select *from kiemtras
GO
create proc [dbo].[getkiemtrachecktg] 
@idnv varchar(50)
	as
	begin 
	SELECT*FROM kiemtras where idnv=@idnv AND Hople=1 AND MONTH(ngay)=(MONTH(CONVERT (date,GETDATE()))) ;	
	end
	select *from kiemtras
GO
create proc [dbo].[getkiemtracheckcg] 
@idnv varchar(50)
	as
	begin 
	SELECT*FROM kiemtras where idnv=@idnv AND Hople= -1 AND MONTH(ngay)=(MONTH(CONVERT (date,GETDATE()))) ;	
	end
	select *from kiemtras
GO
/****** Object:  StoredProcedure [dbo].[get_all_user]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_all_userss] 
	as
	begin
		select*from userss
	end
GO
/*Tìm ki?m*/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_search_chinhanh] 
@tencn nvarchar
as
begin
select*from chinhanh where Id = 2
end
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_search_kiemtra] 
@hoten nvarchar(255)
as
begin
SELECT Nhanvien.hoten,kiemtra.thang,kiemtra.ngay,kiemtra.giovao,kiemtra.giora,kiemtra.Lydovaomuon,kiemtra.Lydorasom,kiemtra.Hople  FROM kiemtra,Nhanvien
WHERE kiemtra.idnv=nhanvien.id
AND hoten like  '%'+ @hoten+ '%'
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_search_phongban] 
@tenpb nvarchar
as
begin
select * from phongban
where tenpb like '%' + @tenpb + '%'
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_search_chinhanh] 
@tencn nvarchar
as
begin
select * from chinhanh
where tencn like '%' + @tencn + '%'
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_search_tonhom] 
@tentn nvarchar(255)
as
begin
select * from Tonhoms
where tentn like '%' + @tentn + '%'
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_search_nhanvien] 
@hoten nvarchar(255)
as
begin
select * from Nhanvien
where hoten like '%' + @hoten + '%'
end
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_search_kiemtra] 
@tennv nvarchar
as
begin
select kiemtra.Id,kiemtra.idnv,Nhanvien.hoten,kiemtra.ngay,kiemtra.giovao,kiemtra.giora,kiemtra.thang,kiemtra.Lydovaomuon,kiemtra.Lydorasom,kiemtra.Hople
FROM kiemtra,Nhanvien
WHERE kiemtra.idnv=Nhanvien.Id AND @tennv=Nhanvien.hoten
ORDER BY Nhanvien.hoten ASC
end
GO
DROP PROC get_search_kiemtra





/****** Object:  StoredProcedure [dbo].[get_order_success]    Script Date: 6/10/2021 5:27:19 PM ******/
/****** Object:  StoredProcedure [dbo].[get_product_by_category]    Script Date: 6/10/2021 5:27:19 PM ******/

/****** Object:  StoredProcedure [dbo].[get_product_by_id]    Script Date: 6/10/2021 5:27:19 PM ******/

/****** Object:  StoredProcedure [dbo].[get_product_new_hot]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE  proc [dbo].[get_product_new_hot]
as
begin
	select top 6 * 
	from products as p 
	where p.hot = 1 
	ORDER BY p.created_at desc
end
GO
/****** Object:  StoredProcedure [dbo].[get_product_relationship]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE proc [dbo].[get_product_relationship] 
@id int,
@cate_id int
as
begin
select top 4 * from Products where Cate_id = @cate_id and Id!=@id
end
GO
/****** Object:  StoredProcedure [dbo].[get_revenues_by_date]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[get_revenues_by_date]
@datefrom [nvarchar](max),
@dateto [nvarchar](max)
as 
begin
select sum(dt.total) as 'total',sum((dt.price*dt.quantity)-(p.Originalprice*dt.quantity)) as 'revenues' from OrderDetail as dt inner join Orders as o on dt.order_id=o.Id 
inner join Products as p on dt.product_id=p.Id
where  o.status = 1 and CONVERT(date,o.created_at) >= cast(@datefrom as date) and CONVERT(date,o.created_at)<=cast(@dateto as date);
end
GO
/**/
CREATE proc [dbo].[get_test]
as 
begin
SELECT phongban.tenpb ,COUNT(nhanvien.id) as Soluong
        FROM phongban,Tonhoms ,nhanvien
        WHERE Tonhoms.idpb=phongban.id
        AND Tonhoms.id=nhanvien.idtn
                GROUP BY phongban.tenpb
end
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[sp_category_create]

AS
    BEGIN
      INSERT INTO Tinhluong(idnv,n)
                VALUES
                (
                 @category_name, 
                 @category_slug, 
                 @ParentId
                );
        SELECT '';
    END;
GO
select DATEDIFF(hour,kt.giovao,kt.giora) from kiemtras as kt
select sum((dt.luongthoathuan)+(p.Sotien)) as 'Tong',COUNT(kt.ngay) as'ngayhople' from Nhanvien as dt inner join  Phucap as p on dt.Id=p.idnv inner join  userss as s on dt.idtk=s.Id inner join  kiemtras as kt on s.Id=kt.idnv
where dt.Id=p.idnv and s.Id=kt.idnv and MONTH(ngay)=(MONTH(CONVERT (date,GETDATE()))) 
group by dt.Id



/****** Object:  StoredProcedure [dbo].[get_revenues_by_day]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_revenues_by_day]
as
begin
select sum(dt.total) as 'total',sum((dt.price*dt.quantity)-(p.Originalprice*dt.quantity)) as 'revenues' from OrderDetail as dt inner join Orders as o on dt.order_id=o.Id 
inner join Products as p on dt.product_id=p.Id
where  o.status = 1 and CONVERT(date,o.created_at) = CONVERT(date,GETDATE())

end
GO
/****** Object:  StoredProcedure [dbo].[get_revenues_by_month]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_revenues_by_month]
as
begin
select sum(dt.total) as 'total',sum((dt.price*dt.quantity)-(p.Originalprice*dt.quantity)) as 'revenues' from OrderDetail as dt inner join Orders as o on dt.order_id=o.Id 
inner join Products as p on dt.product_id=p.Id
where  o.status = 1 and Month(o.created_at) = Month(GETDATE());

end
GO
/****** Object:  StoredProcedure [dbo].[get_revenues_by_year]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_revenues_by_year]
as
begin
select sum(dt.total) as 'total',sum((dt.price*dt.quantity)-(p.Originalprice*dt.quantity)) as 'revenues' from OrderDetail as dt inner join Orders as o on dt.order_id=o.Id 
inner join Products as p on dt.product_id=p.Id
where  o.status = 1 and YEAR(o.created_at) = YEAR(GETDATE());

end
GO
/****** Object:  StoredProcedure [dbo].[order_succes]    Script Date: 6/10/2021 5:27:19 PM ******/

/****** Object:  StoredProcedure [dbo].[orderview_revenue]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[orderview_revenue]
as
begin
select o.Id,o.name_customer,o.email_customer,sum((dt.quantity*p.Originalprice)) as 'originalPrice',sum(dt.quantity*dt.price) as  'Total',sum((dt.quantity*dt.price)-(dt.quantity*p.Originalprice)) as 'interest',o.created_at from orders  as o inner join  orderdetail as dt on o.Id=dt.order_id inner join Products as p on dt.product_id=p.Id
where o.status = 1
group by o.Id,o.name_customer,o.email_customer,o.created_at

end
GO
/****** Object:  StoredProcedure [dbo].[sp_category_create]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[sp_category_create]
(
 @category_name       NVARCHAR(100), 
 @category_slug          VARCHAR(250), 
 @ParentId           int 
)
AS
    BEGIN
      INSERT INTO Categories(Name,Slug,ParentId)
                VALUES
                (
                 @category_name, 
                 @category_slug, 
                 @ParentId
                );
        SELECT '';
    END;
GO
/****** Object:  StoredProcedure [dbo].[sp_category_edit]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_category_edit]
(
 @Id int,
 @category_name       NVARCHAR(100), 
 @category_slug          VARCHAR(250)
)
as
begin
	update Categories set Slug = @category_slug,Name=@category_name where Id = @Id;
	SELECT '';
end
GO
/****** Object:  StoredProcedure [dbo].[sp_product_create]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO





/****** Object:  StoredProcedure [dbo].[sp_product_search]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

Create PROCEDURE [dbo].[search_chinhanh] (@page_index  INT, 
                                       @page_size   INT,
									   @tencn nvarchar(150)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.tencn ASC)) AS RowNumber, 
                             u.Id             , 
							 u.tencn          ,
							 u.sdt          ,
							 u.diachi           ,
							 u.email           
							
							INTO #Results1
                        FROM chinhanh AS u
						WHERE ((@tencn= '') OR (u.tencn LIKE '%' + @tencn + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
                       SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.tencn ASC)) AS RowNumber, 
                             u.Id             , 
							 u.tencn          ,
							 u.sdt          ,
							 u.diachi           ,
							 u.email           
							
							INTO #Results2
                        FROM chinhanh AS u
						WHERE ((@tencn= '') OR (u.tencn LIKE '%' + @tencn + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

Create PROCEDURE [dbo].[search_baocaos] (@page_index  INT, 
                                       @page_size   INT,
									   @noidung nvarchar(max)									  
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Noidung ASC)) AS RowNumber, 
                             u.Id             , 
							 u.idnv          ,
							 u.Thu          ,
							 u.Noidung           ,
							 u.Ngay,
							 u.Nhanxet,
							 u.Linkbaocao
		
							INTO #Results1
                        FROM Baocaocongviec AS u
						WHERE ((@noidung= '') OR (u.Noidung LIKE '%' + @noidung + '%') AND '3297F0F2-35D3-4231-919D-1CFCF4035976'=u.idnv) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
                       SELECT(ROW_NUMBER() OVER(
                               ORDER BY u.Noidung ASC)) AS RowNumber, 
                             u.Id             , 
							 u.idnv          ,
							 u.Thu          ,
							 u.Noidung           ,
							 u.Ngay,
							 u.Nhanxet,
							 u.Linkbaocao  
							
							INTO #Results2
                        FROM Baocaocongviec AS u
						WHERE ((@noidung= '') OR (u.Noidung LIKE '%' + @noidung + '%') AND '3297F0F2-35D3-4231-919D-1CFCF4035976'=u.idnv) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


Create PROCEDURE [dbo].[search_luongsss] (@page_index  INT, 
                                       @page_size   INT,
									   @idnv varchar(50),
										@mapb varchar(50),
										@matn varchar(50)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.idnv ASC)) AS RowNumber, 
                             u.Id             , 
							 u.idnv          ,
							 u.ngayconghople          ,
							 u.ngaycongkohople           ,
							 u.ngaykhongduoctinh,
							 u.thang,
							 u.thuong,
							 u.phat,
							 u.phucap,
							 u.luongthang,
							 u.luongnhandc,
							 u.nguoixuly,
							 u.mapb,
							 u.matn
							INTO #Results1
                        FROM Luongnv AS u
				     	WHERE (u.thang=(MONTH(CONVERT (date,GETDATE()))) and ((@idnv = '') OR (u.idnv LIKE '%' + @idnv + '%')) and ((@mapb = '') OR (u.mapb = @mapb)) and  ((@matn = '') OR (u.matn = @matn))) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
                       SELECT(ROW_NUMBER() OVER(
                               ORDER BY u.nguoixuly ASC)) AS RowNumber, 
                            u.Id             , 
							 u.idnv          ,
							 u.ngayconghople          ,
							 u.ngaycongkohople           ,
							 u.ngaykhongduoctinh,
							 u.thang,
							 u.thuong,
							 u.phat,
							 u.phucap,
							 u.luongthang,
							 u.luongnhandc,
							 u.nguoixuly,
							  u.mapb,
							 u.matn
							INTO #Results2
                        FROM Luongnv AS u
				       WHERE (u.thang=(MONTH(CONVERT (date,GETDATE()))) and ((@idnv = '') OR (u.idnv LIKE '%' + @idnv + '%')) and ((@mapb = '') OR (u.mapb = @mapb)) and  ((@matn = '') OR (u.matn = @matn))) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;
GO



Create PROCEDURE [dbo].[search_tonhom] (@page_index  INT, 
                                       @page_size   INT,
									   @tentn nvarchar(150)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.tentn ASC)) AS RowNumber, 
                             u.Id             , 
							 u.idpb         ,
							 u.tentn          ,
							 u.trangthai           
							INTO #Results1
                        FROM Tonhoms AS u
						WHERE ((@tentn= '') OR (u.tentn LIKE '%' + @tentn + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
                       SELECT(ROW_NUMBER() OVER(
                               ORDER BY u.tentn ASC)) AS RowNumber, 
                             u.Id             , 
							 u.idpb         ,
							 u.tentn          ,
							 u.trangthai           
							INTO #Results2
                        FROM Tonhoms AS u
						WHERE ((@tentn= '') OR (u.tentn LIKE '%' + @tentn + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
        END;
    END;
GO

Create PROCEDURE [dbo].[search_phongban] (@page_index  INT, 
                                       @page_size   INT,
									   @tenpb nvarchar(255)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
						 SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.tenpb ASC)) AS RowNumber, 
                             u.Id             , 
							 u.idcn,
							 u.tenpb         ,
							 u.sdtpb         ,
							 u.trangthai       
                        INTO #Results1
                        FROM phongban AS u
					    WHERE u.tenpb = @tenpb;                   
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
						SET NOCOUNT ON;
                      
						   SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.tenpb ASC)) AS RowNumber, 
                             u.Id             , 
							 u.idcn,
							 u.tenpb         ,
							 u.sdtpb         ,
							 u.trangthai      
							
							INTO #Results2
                        FROM phongban AS u
						WHERE ((@tenpb= '') OR (u.tenpb LIKE '%' + @tenpb + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;
GO
/***/

Create PROCEDURE [dbo].[search_nhanvien] (@page_index  INT, 
                                       @page_size   INT,
									   @hoten nvarchar(150)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.hoten ASC)) AS RowNumber, 
                               u.Id             , 
							    u.idtk            , 
							 u.idtn          ,
							 u.hoten        ,
							 u.email           ,
							 u.sdt, 
							 u.diachi,
							 u.chucvu, 
							u.gioitinh, 
							u.Hinhanh,
						
							 u.luongthoathuan    
							 
                        INTO #Results1
                        FROM Nhanvien AS u
						WHERE ((@hoten = '') OR (u.hoten LIKE '%' + @hoten + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
           
						   SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.hoten ASC)) AS RowNumber, 
                             u.Id             , 
							   u.idtk            , 
							 u.idtn          ,
							 u.hoten        ,
							 u.email           ,
							 u.sdt, 
							 u.diachi,
							 u.chucvu, 
							u.gioitinh,
							u.Hinhanh,
							 
							 u.luongthoathuan    
							INTO #Results2
                        FROM Nhanvien AS u
						WHERE ((@hoten= '') OR (u.hoten LIKE '%' + @hoten+ '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;

GO
/**/
Create PROCEDURE [dbo].[search_bacluong] (@page_index  INT, 
                                       @page_size   INT,
									   @bacluong nvarchar(10)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.bacluong ASC)) AS RowNumber, 
                               u.Id             , 
							   
							 u.idnv         ,
							 u.bacluong        ,
							 u.hesoluong           ,
							 u.hesoluong2, 
							 u.ngayky,
							 u.ngayhieuluc, 
							u.SoQD
							 
							 
                        INTO #Results1
                        FROM bacluong AS u
						WHERE ((@bacluong = '') OR (u.bacluong LIKE '%' + @bacluong + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
           
						    SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.bacluong ASC)) AS RowNumber, 
                               u.Id             , 
							   
							 u.idnv         ,
							 u.bacluong        ,
							 u.hesoluong           ,
							 u.hesoluong2, 
							 u.ngayky,
							 u.ngayhieuluc, 
							u.SoQD
							 
							 
                        INTO #Results2
                        FROM bacluong AS u
						WHERE ((@bacluong = '') OR (u.bacluong LIKE '%' + @bacluong + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;

GO
/**/
Create PROCEDURE [dbo].[user_search] (@page_index  INT, 
                                       @page_size   INT,
									   @name nvarchar(255)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.name ASC)) AS RowNumber, 
                               u.Id             , 
							    u.name            , 
							 u.email          ,
							 u.sdt        ,
							 u.diachi           ,
							 u.gioitinh, 
							 u.taikhoan,
							 u.Password, 
							u.role, 
							u.token
						
							 
							 
                        INTO #Results1
                        FROM userss AS u
						WHERE ((@name = '') OR (u.name LIKE '%' + @name + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
           
						   SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.name ASC)) AS RowNumber, 
                              u.Id             , 
							    u.name            , 
							 u.email          ,
							 u.sdt        ,
							 u.diachi           ,
							 u.gioitinh, 
							 u.taikhoan,
							 u.Password, 
							u.role, 
							u.token   
							INTO #Results2
                        FROM userss AS u
						WHERE ((@name = '') OR (u.name LIKE '%' + @name + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;

GO
/**/
Create PROCEDURE [dbo].[search_bonhiem] (@page_index  INT, 
                                       @page_size   INT,
									   @Hoten nvarchar(255)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Hoten ASC)) AS RowNumber, 
                               u.Id             , 
							    u.Hoten            , 
							 u.idnv          ,
							 u.chucvucu        ,
							 u.chucvumoi           ,
							 u.Ngaychuyen, 
							 u.Ngayhieuluc,
							 u.SoQD, 
							u.Nguoiky
							
						
							 
							 
                        INTO #Results1
                        FROM bonhiem AS u
						WHERE ((@Hoten = '') OR (u.Hoten LIKE '%' + @Hoten + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
           
						   SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Hoten ASC)) AS RowNumber, 
                                u.Id             , 
							    u.Hoten            , 
							 u.idnv          ,
							 u.chucvucu        ,
							 u.chucvumoi           ,
							 u.Ngaychuyen, 
							 u.Ngayhieuluc,
							 u.SoQD, 
							u.Nguoiky
							
							INTO #Results2
                        FROM bonhiem AS u
						WHERE ((@Hoten = '') OR (u.Hoten LIKE '%' + @Hoten + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;

GO
/**/
/**/
Create PROCEDURE [dbo].[search_bonhiem] (@page_index  INT, 
                                       @page_size   INT,
									   @Hoten nvarchar(255)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Hoten ASC)) AS RowNumber, 
                               u.Id             , 
							    u.Hoten            , 
							 u.idnv          ,
							 u.chucvucu        ,
							 u.chucvumoi           ,
							 u.Ngaychuyen, 
							 u.Ngayhieuluc,
							 u.SoQD, 
							u.Nguoiky
							
						
							 
							 
                        INTO #Results1
                        FROM bonhiem AS u
						WHERE ((@Hoten = '') OR (u.Hoten LIKE '%' + @Hoten + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
           
						   SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Hoten ASC)) AS RowNumber, 
                                u.Id             , 
							    u.Hoten            , 
							 u.idnv          ,
							 u.chucvucu        ,
							 u.chucvumoi           ,
							 u.Ngaychuyen, 
							 u.Ngayhieuluc,
							 u.SoQD, 
							u.Nguoiky
							
							INTO #Results2
                        FROM bonhiem AS u
						WHERE ((@Hoten = '') OR (u.Hoten LIKE '%' + @Hoten + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;

GO
/**/
Create PROCEDURE [dbo].[search_khenthuong] (@page_index  INT, 
                                       @page_size   INT,
									  @khenthuong nvarchar(255)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Khenthuong ASC)) AS RowNumber, 
                               u.Id             , 
							   u.Manv            , 
							 u.Mapb          ,
							 u.SoQD        ,
							 u.Chucvu           ,
							 u.Khenthuong, 
							 u.HTKT,
							 u.Trangthai, 
							 u.Ngayky,
							 u.Namthidua	 
							 
                        INTO #Results1
                        FROM Khenthuong AS u
						WHERE ((@khenthuong = '') OR (u.Khenthuong LIKE '%' + @khenthuong + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
           
						   SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Khenthuong ASC)) AS RowNumber, 
                                 u.Id             , 
							  u.Manv            , 
							 u.Mapb          ,
							 u.SoQD        ,
							 u.Chucvu           ,
							 u.Khenthuong, 
							 u.HTKT,
							 u.Trangthai, 
							 u.Ngayky,
							 u.Namthidua
							
							INTO #Results2
                         FROM Khenthuong AS u
							WHERE ((@khenthuong = '') OR (u.Khenthuong LIKE '%' + @khenthuong + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;

GO
/**/
Create PROCEDURE [dbo].[search_hopdong] (@page_index  INT, 
                                       @page_size   INT,
									   @phanloai nvarchar(255)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Phanloai ASC)) AS RowNumber, 
                               u.Id             , 
							    u.MaLHD            , 
							 u.SoHD          ,
							 u.Phanloai        ,
							 u.Trangthai           ,
							 u.Ngayky, 
							 u.Ngayhieuluc,
							 u.Manv, 
							u.Luuythue,
							u.Masothue,
						
							u.ngayhethan
							
						
							 
							 
                        INTO #Results1
                        FROM HopDong AS u
						WHERE ((@phanloai = '') OR (u.Phanloai LIKE '%' + @phanloai + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
           
						   SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Phanloai ASC)) AS RowNumber, 
                              u.Id             , 
							    u.MaLHD            , 
							 u.SoHD          ,
							 u.Phanloai        ,
							 u.Trangthai           ,
							 u.Ngayky, 
							 u.Ngayhieuluc,
							 u.Manv, 
							u.Luuythue,
							u.Masothue,
							
							u.ngayhethan
							
							
							INTO #Results2
                        FROM HopDong AS u
						WHERE ((@phanloai = '') OR (u.Phanloai LIKE '%' + @phanloai + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;

GO
/**/
Create PROCEDURE [dbo].[search_dieudong] (@page_index  INT, 
                                       @page_size   INT,
									   @hoten nvarchar(255)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Hoten ASC)) AS RowNumber, 
                               u.Id             , 
							    u.Hoten            , 
							 u.idnv          ,
							 u.phongbancu        ,
							 u.phongbanmoi           ,
							 u.Ngaychuyen, 
							 u.Ngayhieuluc,
							 u.SoQD, 
							u.Nguoiky
							
							
						
							 
							 
                        INTO #Results1
                        FROM dieudong AS u
						WHERE ((@hoten = '') OR (u.Hoten LIKE '%' + @hoten + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
           
						   SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Hoten ASC)) AS RowNumber, 
                               u.Id             , 
							    u.Hoten            , 
							 u.idnv          ,
							 u.phongbancu        ,
							 u.phongbanmoi           ,
							 u.Ngaychuyen, 
							 u.Ngayhieuluc,
							 u.SoQD, 
							u.Nguoiky
							
							
							INTO #Results2
                        FROM dieudong AS u
					WHERE ((@hoten = '') OR (u.Hoten LIKE '%' + @hoten + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;

GO
/**/
Create PROCEDURE [dbo].[search_phucap] (@page_index  INT, 
                                       @page_size   INT,
									   @tenphucap nvarchar(255)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Tenphucap ASC)) AS RowNumber, 
                               u.Id             , 
							    u.Tenphucap            , 
							 u.idnv          ,
							 u.Sotien        ,
							 u.SoQD           ,
							 u.ngayky, 
							 u.ngayhieuluc
	 
                        INTO #Results1
                        FROM Phucap AS u
						WHERE ((@tenphucap = '') OR (u.Tenphucap LIKE '%' + @tenphucap + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
           
						   SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Tenphucap ASC)) AS RowNumber, 
                           u.Id             , 
							    u.Tenphucap            , 
							 u.idnv          ,
							 u.Sotien        ,
							 u.SoQD           ,
							 u.ngayky, 
							 u.ngayhieuluc
							
							
							
							
							INTO #Results2
                        FROM Phucap AS u
					WHERE ((@tenphucap = '') OR (u.Tenphucap LIKE '%' + @tenphucap + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;

GO
/**/
Create PROCEDURE [dbo].[search_trinhdo] (@page_index  INT, 
                                       @page_size   INT,
									   @hocham nvarchar(255)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Hocham ASC)) AS RowNumber, 
                               u.Id             , 
							    u.idnv            , 
							 u.Hocham          ,
							 u.Hocvi        ,
							 u.Chuyennganh           ,
							 u.Chuyenmon, 
							 u.Ngoaingu,
							 u.Tinhoc,
							 u.Vanbangkhac,
							 u.ghichu
	 
                        INTO #Results1
                        FROM Trinhdo AS u
						WHERE ((@hocham = '') OR (u.Hocham LIKE '%' + @hocham + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
           
						   SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Hocham ASC)) AS RowNumber, 
                             u.Id             , 
							    u.idnv            , 
							 u.Hocham          ,
							 u.Hocvi        ,
							 u.Chuyennganh           ,
							 u.Chuyenmon, 
							 u.Ngoaingu,
							 u.Tinhoc,
							 u.Vanbangkhac,
							 u.ghichu
							INTO #Results2
                        FROM Trinhdo AS u
						WHERE ((@hocham = '') OR (u.Hocham LIKE '%' + @hocham + '%')) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;

GO
/**/
Create PROCEDURE [dbo].[search_kiemtrass] (@page_index  INT, 
                                       @page_size   INT,
									   @hoten nvarchar(255)
									   )
AS
    BEGIN
        DECLARE @RecordCount BIGINT;
        IF(@page_size <> 0)
            BEGIN
                SET NOCOUNT ON;
                        SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Hoten ASC)) AS RowNumber, 
                               u.Id             , 
							    u.idnv            , 
								 u.Hoten        ,
							 u.ngay          ,
							 u.giovao        ,
							 u.giora           ,
						
							 u.Lydovaomuon,
							 u.Lydorasom, 
							u.trangthaivaomuon, 
							u.trangthairasom,
							 u.Hople ,
							 u.Sogio
							 
                        INTO #Results1
                        FROM kiemtras AS u
						WHERE ((@hoten = '') OR (u.Hoten LIKE '%' + @hoten + '%') OR MONTH(u.ngay)=(MONTH(CONVERT (date,GETDATE())))) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results1;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results1
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results1; 
            END;
            ELSE
            BEGIN
                SET NOCOUNT ON;
           
						   SELECT(ROW_NUMBER() OVER(
                              ORDER BY u.Hoten ASC)) AS RowNumber, 
                             u.Id             , 
							   u.idnv            , 
							    u.Hoten        ,
							 u.ngay          ,
							 u.giovao        ,
							 u.giora           ,
							
							 u.Lydovaomuon,
							 u.Lydorasom, 
							u.trangthaivaomuon, 
							u.trangthairasom,
						
							 u.Hople  ,
							  u.Sogio
							INTO #Results2
                        FROM kiemtras AS u
						WHERE ((@hoten= '') OR (u.Hoten LIKE '%' + @hoten+ '%') OR MONTH(u.ngay)=(MONTH(CONVERT (date,GETDATE())))) ;
                        SELECT @RecordCount = COUNT(*)
                        FROM #Results2;
                        SELECT *, 
                               @RecordCount AS RecordCount
                        FROM #Results2
                        WHERE ROWNUMBER BETWEEN(@page_index - 1) * @page_size + 1 AND(((@page_index - 1) * @page_size + 1) + @page_size) - 1
                              OR @page_index = -1;
                        DROP TABLE #Results2; 
        END;
    END;

GO



SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[chinhanh_update]
(
@id int,
@customer_tencn nvarchar(255),
@customer_diachi nvarchar(255),
@customer_email nvarchar(255),
@customer_sdt nvarchar(15)
)
AS
    BEGIN
   update chinhanh set 
				tencn= @customer_tencn          ,
				diachi= @customer_diachi           ,
				sdt= @customer_sdt          ,
				email= @customer_email         	
				where Id = @id;
			 
        SELECT '';
    END;

	SElect* from chinhanh
GO

CREATE PROCEDURE [dbo].[Baocao_updates]
(
@id int,
@noidung nvarchar(max),
@nhanxet nvarchar(max),
@linkbaocao nvarchar(max),
@thu int,
@ngay datetime
)
AS
    BEGIN
   update Baocaocongviec set 
				Thu= @thu        ,
				Ngay= @ngay          ,
				Noidung= @noidung         ,
				Nhanxet= @nhanxet       ,
				Linkbaocao=@linkbaocao
				where Id = @id;
			 
        SELECT '';
    END;

	
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[Time_update]
(
@id int,
@giovao datetime,
@giora datetime
)
AS
    BEGIN
   update Time set 
				Giovao= @giovao         ,
				Giora= @giora                  	
				where Id = @id;
			 
        SELECT '';
    END;
GO

CREATE PROCEDURE [dbo].[phongban_updates]
(
@id varchar(50),
@customer_idcn int,
@customer_tenpb nvarchar(255),
@customer_sdtpb nvarchar(15),
@customer_trangthai nvarchar(255)
)
AS
    BEGIN
   update phongban set 
				idcn= @customer_idcn         ,
				tenpb= @customer_tenpb          ,
				sdtpb= @customer_sdtpb          ,
				trangthai= @customer_trangthai         	
				where Id = @id;
			 
        SELECT '';
    END;

	
GO


CREATE PROCEDURE [dbo].[tonhom_updates]
(
@id varchar(50),
@idpb varchar(50),
@tentn nvarchar(255),
@trangthai nvarchar(255)
)
AS
    BEGIN
   update Tonhoms set 
				idpb= @idpb        ,
				tentn= @tentn          ,
				trangthai= @trangthai          
				     	
				where Id = @id;
			 
        SELECT '';
    END;
GO

CREATE PROCEDURE [dbo].[menu_update]
(
@id int,
@tenmenu nvarchar(250),
@Icon nvarchar(255),
@link nvarchar(255),
@trangthai bit
)
AS
    BEGIN
   update Menu set 
				   
				TenMenu= @tenmenu        ,
				trangthai= @trangthai    ,
				Icon=@Icon,
				link=@link
				     	
				where Id = @id;
			 
        SELECT '';
    END;
GO

CREATE PROCEDURE [dbo].[nhanvien_updatessssss]
(
@id varchar(50),
@idtn varchar(50),

@hoten Nvarchar(255),
@email nvarchar(255),
@sdt nvarchar(15),
@diachi nvarchar(255),
@chucvu nvarchar(255),
@gioitinh nvarchar(11),
@Hinhanh nvarchar(255),
@luongthoathuan int
)
AS
    BEGIN
   update Nhanvien set 
              
				idtn= @idtn          ,
				hoten= @hoten           ,
				email= @email          ,
				sdt= @sdt      ,   
				diachi=@diachi,
				chucvu= @chucvu      ,
				gioitinh= @gioitinh     ,
				Hinhanh=@Hinhanh,
				luongthoathuan= @luongthoathuan
				where Id = @id;
						 
        SELECT '';
    END;
				 BEGIN
   update Lylichtrichngang set 
				hoten= @hoten           ,
				email= @email          ,
				sdt= @sdt      ,   
				diachi=@diachi
				where Id = @id;
				 SELECT '';
    END;
	BEGIN
	update bonhiem set 	
				Hoten= @hoten           
				where idnv = @id;
				SELECT '';
    END;
				BEGIN
	update miennhiem set 	
				Hoten= @hoten           
				where idnv = @id;
				
        SELECT '';
    END;
				BEGIN
	update dieudong set 	
				Hoten= @hoten           
				where idnv = @id;
				  SELECT '';
    END;
				BEGIN
	update lichsuchuyento set 	
				Hoten= @hoten           
				where idnv = @id; 
        SELECT '';
    END;

	
GO

CREATE PROCEDURE [dbo].[kiemtra_update]
(
@id int,
 @idnv varchar(50),
 @hoten nvarchar(255),
  @ngay datetime,
  @giovao datetime ,
  @giora datetime ,
 @Lydovaomuon nvarchar(max),
 @trangthaivaomuon int,
 @Lydorasom nvarchar(max),
 @trangthairasom int,
 @Hople int,
 @Sogio int
)
AS
    BEGIN
   update kiemtras set 
				idnv= @idnv          ,
				Hoten=@hoten,
				ngay= @ngay           ,
				giovao= @giovao          ,
				giora= @giora,
			   
				Lydovaomuon= @Lydovaomuon,
				trangthaivaomuon= @trangthaivaomuon,
				Lydorasom= @Lydorasom,
				trangthairasom= @trangthairasom,
				Hople= @Hople,
				Sogio=@Sogio
				where Id = @id;
			 
        SELECT '';
    END;

	
GO

/****** Object:  StoredProcedure [dbo].[sp_product_update]    Script Date: 6/10/2021 5:27:19 PM ******/

/****** Object:  StoredProcedure [dbo].[sp_user_create]    Script Date: 6/10/2021 5:27:19 PM ******/

/****** Object:  StoredProcedure [dbo].[sp_user_get_by_id]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[user_get_by_idss](@id varchar(50))
AS
    BEGIN
        SELECT Id    ,   
		      name   ,
			 email   ,
			  sdt    ,
			 diachi  ,
			 gioitinh,
			taikhoan ,
			 Password,
			 role      
        FROM userss
      where  userss.Id = @id;
    END;
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[user_get_by_email](@email nvarchar(255))
AS
    BEGIN
        SELECT*
        FROM userss
      where  userss.email = @email;
    END;
GO
/****** Object:  StoredProcedure [dbo].[sp_user_get_by_username_password]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[user_get_by_username_passwords](@taikhoan varchar(255), @password varchar(100))
AS
    BEGIN
        SELECT        Id               , 
		          
					 name           ,
					 email           ,
					  sdt           ,
					   diachi           ,
					   gioitinh,
					    taikhoan           ,
					 Password         ,
					 role      ,
					  token     
        FROM userss
      where  taikhoan = @taikhoan and Password = @password ;
    END;
GO
/****** Object:  StoredProcedure [dbo].[sp_user_update]    Script Date: 6/10/2021 5:27:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[userss_update]
(@id              varchar(50), 
 @name          nvarchar(255),
 @email         nvarchar(255) ,
 @sdt         nvarchar(15) ,
 @diachi         nvarchar(255) ,
  @gioitinh        nvarchar(11) ,
 @taikhoan         varchar(255) ,
 @password        varchar(100)  ,
 @role          varchar(100) ,
 @token nvarchar(100)
)
AS
    BEGIN
   update userss set 
              
				name= @name           ,
				email= @email           ,
				sdt= @sdt         ,
				diachi= @diachi         ,
				gioitinh= @gioitinh         ,
				taikhoan= @taikhoan         ,
				Password = @password           ,
				role= @role 
				where Id = @id;
			 
        SELECT '';
    END;

	
GO




SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[get_all_userss] 
	as
	begin
		select*from userss
	end
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	create PROCEDURE [dbo].[userss_delete]
(@id varchar(50)
)
AS
    BEGIN
		delete from userss where Id = @id;

        SELECT '';
    END;
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	create PROCEDURE [dbo].[Menu_delete]
(@id int 
)
AS
    BEGIN
		delete from Menu where Id = @id;
        SELECT '';
    END;
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

 CREATE PROCEDURE [dbo].[usersss_create]
(

 @name          varchar(100),
 @email         varchar(100) ,
 @sdt         varchar(15) ,
 @diachi         nvarchar(255) ,
  @gioitinh         nvarchar(11) ,
 @taikhoan         varchar(255) ,
 @password        varchar(100)  ,
 @role          varchar(100),
 @token nvarchar(100)
)
AS
    BEGIN
      INSERT userss
                (	
				   
					 name           ,
					 email           ,
					 sdt,
					 diachi,
					 gioitinh,
					 taikhoan,
					 Password         ,

					 role           ,
					 token    
				)
                VALUES
                (
			
				 @name           ,			
				 @email           ,
				 @sdt,
				 @diachi,
				 @gioitinh,
				 @taikhoan,
			   	@password         ,
				 @role           ,
				 @token
				);
				SELECT '';

	end;
GO
CREATE PROCEDURE [dbo].[create_luongsss]
(

 @idnv varchar(50),
 @matn varchar(50),
 @mapb varchar(50),
  @ngayhople int,
  @ngaykohople int ,
  @ngaykhongduoctinh int ,
  @phucap int,
  @thang int ,
   @thuong float,
    @phat float,
 @luongthang float,
 @luongnhandc float,
 @nguoixuly nvarchar(250)
)
AS
   begin
	insert Luongnv(idnv,matn,mapb,ngayconghople,ngaycongkohople,ngaykhongduoctinh,phucap,thang,thuong,phat,luongthang,luongnhandc,nguoixuly)
	values(@idnv,@matn,@mapb,@ngayhople,@ngaykohople,@ngaykhongduoctinh,@phucap,@thang,@thuong,@phat,@luongthang,@luongnhandc,@nguoixuly);
	SELECT '';

	end;
GO

CREATE PROCEDURE [dbo].[create_thongke]
(

  @idnv varchar(50),
  @ngayhople int,
  @ngaykohople int ,
  @ngaykhongduoctinh int ,

 @tongluong float,
 @nam int
)
AS
   begin
	insert Thongke(idnv,Songayducong,Songaythieucong,Songaycongchet,Tongluong,Nam)
	values(@idnv,@ngayhople,@ngaykohople,@ngaykhongduoctinh,@tongluong,@nam);
	SELECT '';

	end;
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[update_thongke]
(@Id int,
 @idnv varchar(50),
  @ngayhople int,
  @ngaykohople int ,
  @ngaykhongduoctinh int ,

 @tongluong float,
 @nam int
)
as
begin
update Thongke set 
         idnv=@idnv,
		 Songayducong=@ngayhople,
		 Songaythieucong=@ngaykohople,
		 Songaycongchet=@ngaykhongduoctinh,
		
		 Tongluong=@tongluong,
		 Nam=@nam
		
	where Id = @Id;
end
GO
CREATE PROCEDURE [dbo].[checkin]
(
@id int,
 @idnv int,
  @ngay datetime,
  @giovao datetime ,
  @giora datetime ,
  @thang datetime ,
 @Lydovaomuon nvarchar(max),
 @trangthaivaomuon int,
 @Lydorasom nvarchar(max),
 @trangthairasom int,
 @Hople int
)
AS
   begin
	insert kiemtras(idnv,ngay,giovao,giora,thang,Lydovaomuon,Lydorasom,trangthaivaomuon,trangthairasom,Hople)
	values(@idnv,@ngay,@giovao,@giora,@thang,@Lydovaomuon,@Lydorasom,@trangthaivaomuon,@trangthairasom,@Hople);
	SELECT '';

	end;
GO

	select *from kiemtras