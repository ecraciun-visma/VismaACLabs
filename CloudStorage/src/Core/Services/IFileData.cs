﻿using System;
using System.Collections.Generic;
using Core.Entities;

namespace Core.Services
{
    public interface IFileData
    {
        IEnumerable<FileInfo> GetAll(string companyId = null);
        FileInfo Get(Guid id);
        FileInfo Add(FileInfo file);
        void Delete(FileInfo fileInfo);
        void Commit();
    }
}